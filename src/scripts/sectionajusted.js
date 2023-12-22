window.addEventListener('mousemove', function(e) {
    var header = document.getElementById('header');
    if (header.classList.contains('on-home')) { // Si l'utilisateur est sur la page d'accueil
      header.classList.remove('hide');
    } else if (e.clientY <= 50) { // Si la souris est à moins de 50px du haut de la page
      header.classList.remove('hide');
    } else {
      setTimeout(function() {
        header.classList.add('hide');
      }, 3000); // Ajoute un délai de 2 secondes avant de masquer l'en-tête
    }
  });