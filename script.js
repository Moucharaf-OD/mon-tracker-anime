/*Tableau de données pour les animés/webtoon */
let animes = [];
let webtoons = [];
let idEnEdition = null;
let listeEnEdition = null;

//Chargement des animes depuis l'API
async function chargerAnimes() {
  const reponse = await fetch('http://localhost:3000/api/animes');
  animes = await reponse.json();
  afficherCartes(animes, "section-animes");
}

//Chargement des webtoons depuis l'API
async function chargerWebtoons() {
  const reponse = await fetch('http://localhost:3000/api/webtoons');
  webtoons = await reponse.json();
  afficherCartes(webtoons, "section-webtoons");
}

/*Génération automatique de cartes avec le boutton de suppression*/
function afficherCartes(liste, idSection) {
  const conteneur = document.querySelector(`#${idSection} .grille-cartes`);
  conteneur.innerHTML = "";

  liste.forEach(function (item, index) {
    conteneur.innerHTML += `
      <article class="carte">
        <img src="${item.image ? item.image : 'https://via.placeholder.com/150x220'}" alt="Affiche de ${item.titre}">
        <h3>${item.titre}</h3>
        <p class="date-sortie">${item.date_sortie ? item.date_sortie : ''}</p>
        <p class="synopsis">${item.synopsis}</p>
        <p class="note">&#11088; ${item.note !== null ? item.note + '/10' : 'Non noté'}</p>
        <div class="actions-carte">
          <button class="bouton-modifier" data-id="${item.id}" data-liste="${idSection}" aria-label="Modifier">&#9998;</button>
          <button class="bouton-supprimer" data-id="${item.id}" data-liste="${idSection}" aria-label="Supprimer">&#128465;</button>
        </div>
      </article>
    `;
  });
}

chargerAnimes();
chargerWebtoons();

/*ecoute de la soumission du formulaire et ajout à la bonne liste*/
const formulaire = document.getElementById("formulaire-ajout");
formulaire.addEventListener("submit", async function (evenement) {
  evenement.preventDefault();

  const type = document.getElementById("input-type").value;

  if (idEnEdition) {
    // Mode MODIFICATION : on fait un PUT
    const liste = listeEnEdition === "section-animes" ? animes : webtoons;
    const itemActuel = liste.find(element => element.id == idEnEdition);

    const donneesModifiees = {
      titre: document.getElementById("input-titre").value,
      synopsis: document.getElementById("input-synopsis").value,
      note: document.getElementById("input-note").value || null,
      titre_secondaire: itemActuel.titre_secondaire,
      date_sortie: itemActuel.date_sortie,
      image: itemActuel.image
    };

    const url = listeEnEdition === "section-animes"
      ? `http://localhost:3000/api/animes/${idEnEdition}`
      : `http://localhost:3000/api/webtoons/${idEnEdition}`;

    await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(donneesModifiees)
    });

    if (listeEnEdition === "section-animes") {
      chargerAnimes();
    } else {
      chargerWebtoons();
    }

    // On réinitialise le mode édition
    idEnEdition = null;
    listeEnEdition = null;
    formulaire.querySelector("button[type='submit']").textContent = "Ajouter";

  } else {
    // Mode AJOUT : ton code existant, inchangé
    const nouvelleEntree = {
      titre: document.getElementById("input-titre").value,
      synopsis: document.getElementById("input-synopsis").value,
      note: document.getElementById("input-note").value
    };

    const url = type === "anime" ? 'http://localhost:3000/api/animes' : 'http://localhost:3000/api/webtoons';

    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nouvelleEntree)
    });

    if (type === "anime") {
      chargerAnimes();
    } else {
      chargerWebtoons();
    }
  }

  formulaire.reset();
});

/*ecoute du bouton de suppression et modification*/ 
document.addEventListener("click", async function (evenement) {
  if (evenement.target.classList.contains("bouton-supprimer")) {
    const id = evenement.target.dataset.id;
    const idListe = evenement.target.dataset.liste;

    const url = idListe === "section-animes" 
    ? `http://localhost:3000/api/animes/${id}` 
    : `http://localhost:3000/api/webtoons/${id}`;
    
    await fetch(url, {
      method: 'DELETE'
    });

    if (idListe === "section-animes") {
      chargerAnimes();
    } else {
      chargerWebtoons();
    }
  }

  if (evenement.target.classList.contains("bouton-modifier")) {
    const id = evenement.target.dataset.id;
    const idListe = evenement.target.dataset.liste;

    // On cherche l'animé/webtoon correspondant dans le tableau déjà chargé
    const liste = idListe === "section-animes" ? animes : webtoons;
    const item = liste.find(element => element.id == id);

    if (item) {
      // On remplit le formulaire avec les valeurs actuelles
      document.getElementById("input-titre").value = item.titre;
      document.getElementById("input-synopsis").value = item.synopsis;
      document.getElementById("input-note").value = item.note !== null ? item.note : "";
      document.getElementById("input-type").value = idListe === "section-animes" ? "anime" : "webtoon";

      // On mémorise qu'on est en train de modifier CET élément précis
      idEnEdition = id;
      listeEnEdition = idListe;

      // On change le texte du bouton pour que ce soit clair
      formulaire.querySelector("button[type='submit']").textContent = "Modifier";
    }
  }
});


/* Gestion du thème sombre/clair */
const boutonTheme = document.getElementById("bouton-theme");
const html = document.documentElement;
const themeSauvegarde = localStorage.getItem("theme");
if (themeSauvegarde === "sombre") {
  html.setAttribute("data-theme", "sombre");
  boutonTheme.innerHTML = "&#9728; Mode clair";
}

boutonTheme.addEventListener("click", function () {
  const themeActuel = html.getAttribute("data-theme");

  if (themeActuel === "sombre") {
    html.removeAttribute("data-theme");
    boutonTheme.innerHTML = "&#127769; Mode sombre";
    localStorage.setItem("theme", "clair");
  } else {
    html.setAttribute("data-theme", "sombre");
    boutonTheme.innerHTML = "&#9728; Mode clair";
    localStorage.setItem("theme", "sombre");
  }
});