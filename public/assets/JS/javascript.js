document.addEventListener("DOMContentLoaded", function() {
  // Obtenez l'élément avec l'ID "back-to-top-btn"
  const btn = document.getElementById("back-to-top-btn");

  // Vérifiez si l'élément existe
  if (btn) {
    // Masque le bouton au chargement de la page
    btn.style.display = "none";

    window.addEventListener("scroll", function () {
      if (300 < window.pageYOffset) {
          btn.style.display = "block";
      } else {
          btn.style.display = "none";
      }
    });

    // Ajoute un événement au clic sur le bouton pour remonter en haut de la page
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
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
});