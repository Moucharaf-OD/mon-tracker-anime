const db = require('./database.js');

function attendre(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const requeteGraphQL = `
  query ($titre: String) {
    Media(search: $titre, type: ANIME) {
      coverImage {
        large
      }
    }
  }
`;

async function chercherImage(titre, tentative = 1) {
  const reponse = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: requeteGraphQL,
      variables: { titre: titre }
    })
  });

  // Cas 1 : limite de débit atteinte → on attend et on réessaie
  if (reponse.status === 429) {
    if (tentative <= 3) {
      console.log(`   ↻ Limite de débit atteinte, pause de 60s...`);
      await attendre(60000);
      return chercherImage(titre, tentative + 1);
    }
    throw new Error(`Toujours limité après ${tentative} tentatives`);
  }

  // Cas 2 : titre non trouvé → ce n'est pas une erreur, juste "pas d'image"
  if (reponse.status === 404) {
    return null;
  }

  // Cas 3 : une autre erreur inattendue
  if (!reponse.ok) {
    throw new Error(`Statut HTTP ${reponse.status}`);
  }

  const donnees = await reponse.json();
  return donnees.data && donnees.data.Media ? donnees.data.Media.coverImage.large : null;
}

function nettoyerTitre(titre) {
  return titre.replace(/\s*\([^)]*\)\s*$/, '').trim();
}

async function remplirImages() {
 
  const animes = db.prepare('SELECT id, titre, titre_secondaire FROM animes WHERE image IS NULL').all();

  const stmt = db.prepare('UPDATE animes SET image = ? WHERE id = ?');

    for (const anime of animes) {
    try {
      let urlImage = await chercherImage(anime.titre);

      // 2e tentative : titre nettoyé (sans le "(...)" final)
      if (!urlImage) {
        const titreNettoye = nettoyerTitre(anime.titre);
        if (titreNettoye !== anime.titre) {
          await attendre(1500);
          console.log(`   ↻ Nouvel essai avec "${titreNettoye}"`);
          urlImage = await chercherImage(titreNettoye);
        }
      }

      // 3e tentative : titre secondaire (souvent le titre japonais/romanisé)
      if (!urlImage && anime.titre_secondaire) {
        const titreSecondaireNettoye = nettoyerTitre(anime.titre_secondaire);
        await attendre(1500);
        console.log(`   ↻ Nouvel essai avec le titre secondaire "${titreSecondaireNettoye}"`);
        urlImage = await chercherImage(titreSecondaireNettoye);
      }

      if (urlImage) {
        stmt.run(urlImage, anime.id);
        console.log(`✅ ${anime.titre}`);
      } else {
        console.log(`⚠️ ${anime.titre} → aucune image trouvée`);
      }
    } catch (erreur) {
      console.log(`❌ ${anime.titre} → ${erreur.message}`);
    }

    await attendre(1500);
  }

  console.log('Terminé !');
}

remplirImages();