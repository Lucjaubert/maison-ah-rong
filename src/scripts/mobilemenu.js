const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', function() {
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        mobileMenu.style.height = '10vh'; // Rétablir la hauteur normale
      } else {
        mobileMenu.classList.add('active');
        mobileMenu.style.height = '35vh'; // Ajuster la hauteur lorsque le menu est ouvert
      }
    });

    // Sélectionner tous les liens du menu
    const menuLinks = document.querySelectorAll('.menu-items a');

    // Ajouter un gestionnaire d'événements clic à chaque lien
    menuLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        // Empêcher le comportement par défaut du lien
        event.preventDefault();

        // Fermer le burger-menu
        mobileMenu.classList.remove('active');
        mobileMenu.style.height = '10vh'; // Rétablir la hauteur normale

        // Récupérer l'attribut href du lien pour obtenir l'ID de la section
        const sectionId = this.getAttribute('href');

        // Utiliser scrollTo pour déplacer la fenêtre à la section correspondante
        window.scrollTo({
          top: document.querySelector(sectionId).offsetTop,
          behavior: 'smooth' // Pour une transition fluide
        });
      });
    });
