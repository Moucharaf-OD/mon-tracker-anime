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
        <p class="synopsis">${item.synopsis}</p>
        <p class="note">&#11088; ${item.note}/10</p>
        <button class="bouton-supprimer" data-index="${index}" data-liste="${idSection}">Supprimer</button>
      </article>
    `;
  });
}

chargerAnimes();
chargerWebtoons();

/*ecoute de la soumission du formulaire et ajout à la bonne liste*/
const formulaire = document.getElementById("formulaire-ajout");
formulaire.addEventListener("submit", function (evenement) {
  evenement.preventDefault();

  const nouvelleEntree = {
    titre: document.getElementById("input-titre").value,
    synopsis: document.getElementById("input-synopsis").value,
    note: document.getElementById("input-note").value
  };

  const type = document.getElementById("input-type").value;

  if (type === "anime") {
    animes.push(nouvelleEntree);
    afficherCartes(animes, "section-animes");
  } else {
    webtoons.push(nouvelleEntree);
    afficherCartes(webtoons, "section-webtoons");
  }

  formulaire.reset();
});

/*ecoute du bouton de suppression*/ 
document.addEventListener("click", function (evenement) {
  if (evenement.target.classList.contains("bouton-supprimer")) {
    const index = evenement.target.dataset.index;
    const idListe = evenement.target.dataset.liste;

    if (idListe === "section-animes") {
      animes.splice(index, 1);
      afficherCartes(animes, "section-animes");
    } else {
      webtoons.splice(index, 1);
      afficherCartes(webtoons, "section-webtoons");
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