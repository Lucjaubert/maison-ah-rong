document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Récupérez l'ID de la cible à partir de l'attribut href
    const targetId = this.getAttribute('href').substring(1);

    // Récupérez l'élément cible par son ID
    const targetElement = document.querySelector(`#${targetId}`);

    // Si l'élément cible existe, défilez jusqu'à lui
    if (targetElement) {
      // Redirigez vers la page cible
      window.location.href = `/#${targetId}`;

      // Défilez jusqu'au début de la page cible
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      // Si vous êtes sur la page CGV-CGU ou Mentions légales, redirigez vers la page principale
      const currentPath = window.location.pathname;
      if (currentPath.includes('cgv-cgu') || currentPath.includes('mentions-legales')) {
        // Si vous êtes déjà sur la page CGV-CGU ou Mentions légales, faites défiler vers le haut
        if (targetId === 'cgv-cgu' || targetId === 'mentions-legales') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          // Redirigez vers la page principale
          window.location.href = '/';
        }
      } else {
        // Redirigez vers la page cible
        window.location.href = `/#${targetId}`;
      }
    }
  });
});
