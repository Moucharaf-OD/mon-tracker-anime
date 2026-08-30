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

async function chercherImage(titre) {
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

  if (!reponse.ok) {
    throw new Error(`Statut HTTP ${reponse.status}`);
  }

  const donnees = await reponse.json();
  return donnees.data && donnees.data.Media ? donnees.data.Media.coverImage.large : null;
}

// Correspondance : titre exact en base → meilleur terme de recherche à essayer
const corrections = [
  { titreEnBase: "Chilling in Another World with Level 2 Super Cheat Powers", recherche: "Lv2 kara Chīto datta Moto Yūsha Kōho no Nōbiri Isekai Life" },
  { titreEnBase: "Fugushoku Kanteishi (Les Sœurs Arbre Monde - Saison 1)", recherche: "Fugushoku Kanteishi: Saikyō no Tōtsukaima to Tabidachi" },
  { titreEnBase: "Let's Grieve: Treasure Hunter", recherche: "Grieve-ing Ledge: The Most Miserable Treasure Hunter" },
  { titreEnBase: "The Too-Perfect Saint Was Banished", recherche: "Kanpeki Sugiru Seijo wa Tsuihō sa remashita" },
  { titreEnBase: "The Unaware Atelier Master", recherche: "Kanchigai no Atelier Master" },
  { titreEnBase: "Yakuza Fiancé: Raise wa Kootonai ga Ii", recherche: "Raise wa Kaminoninai ga Ii" }
];

async function corrigerImages() {
  const stmt = db.prepare('UPDATE animes SET image = ? WHERE titre = ?');

  for (const correction of corrections) {
    try {
      const urlImage = await chercherImage(correction.recherche);
      if (urlImage) {
        stmt.run(urlImage, correction.titreEnBase);
        console.log(`✅ ${correction.titreEnBase}`);
      } else {
        console.log(`⚠️ ${correction.titreEnBase} → toujours aucune image trouvée`);
      }
    } catch (erreur) {
      console.log(`❌ ${correction.titreEnBase} → ${erreur.message}`);
    }

    await attendre(1500);
  }

  console.log('Terminé !');
}

corrigerImages();