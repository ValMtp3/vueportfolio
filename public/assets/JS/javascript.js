// Masque le bouton au chargement de la page
document.getElementById("back-to-top-btn").style.display = "none";

window.addEventListener("scroll", function () {
    let t = document.getElementById("back-to-top-btn");
    if (300 < window.pageYOffset) {
        t.style.display = "block";
    } else {
        t.style.display = "none";
    }
});
// Ajoute un événement au clic sur le bouton pour remonter en haut de la page
document
    .getElementById("back-to-top-btn")
    .addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
// Sélectionnez tous les liens d'ancre
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Hauteur de la barre de navigation
const navbarHeight = 120;

anchorLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Empêchez le comportement de défilement par défaut
    e.preventDefault();

    // Obtenez l'ID de l'ancre à partir de l'attribut href du lien
    const anchorId = link.getAttribute('href');

    // Sélectionnez l'élément d'ancre correspondant
    const anchorElement = document.querySelector(anchorId);

    // Calculez la position de défilement en soustrayant la hauteur de la barre de navigation
    const scrollToPosition = anchorElement.offsetTop - navbarHeight;

    // Défilez jusqu'à la position calculée
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  });
});