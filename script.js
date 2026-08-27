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