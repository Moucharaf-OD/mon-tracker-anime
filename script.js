/*Tableau de données pour les animés/webtoon */
let animes = [
  {
    titre: "Nom de l'animé",
    synopsis: "Description de l'animé",
    note: 8
  }
];
let webtoons = [
  {
    titre: "Nom du webtoon",
    synopsis: "Description du webtoon",
    note: 9
  }
];

/*Génération automatique de cartes*/
function afficherCartes(liste, idSection) {
  const conteneur = document.querySelector(`#${idSection} .grille-cartes`);
  conteneur.innerHTML = "";

  liste.forEach(function (item) {
    conteneur.innerHTML += `
      <article class="carte">
        <img src="https://via.placeholder.com/150x220" alt="Affiche">
        <h3>${item.titre}</h3>
        <p class="synopsis">${item.synopsis}</p>
        <p class="note">&#11088; ${item.note}/10</p>
      </article>
    `;
  });
}

afficherCartes(animes, "section-animes");
afficherCartes(webtoons, "section-webtoons");

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