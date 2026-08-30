/*Tableau de données pour les animés/webtoon */
let animes = [];
let webtoons = []

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
        <img src="https://via.placeholder.com/150x220" alt="Affiche">
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

  const nouvelleEntree = {
    titre: document.getElementById("input-titre").value,
    synopsis: document.getElementById("input-synopsis").value,
    note: document.getElementById("input-note").value
  };

  const type = document.getElementById("input-type").value;
  const url = type === "anime" ? 'http://localhost:3000/api/animes' : 'http://localhost:3000/api/webtoons';

  await fetch (url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nouvelleEntree)
  })

  if (type === "anime") {
    chargerAnimes()
  } else {
    chargerWebtoons();
  }

  formulaire.reset();
});

/*ecoute du bouton de suppression*/ 
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