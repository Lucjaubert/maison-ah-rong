const navbar = document.querySelector('.navbar');
const header = document.querySelector('#header');
let hideTimeout;

function hideNavbar() {
  navbar.style.transition = 'top 0.5s ease-in-out, opacity 0.5s ease-in-out'; // Ajout d'une transition
  navbar.style.top = '-10vh'; // Déplacer la barre de navigation hors de l'écran
  navbar.style.backgroundColor = 'transparent'; // Rendre le fond transparent
  setTimeout(() => {
    navbar.style.opacity = '0'; // Définir l'opacité à 0 pour la rendre invisible
  }, 200); // Délai avant de la rendre invisible (ajustable)
}

function showNavbar() {
  navbar.style.transition = 'top 0.5s ease-in-out, opacity 0.5s ease-in-out'; // Ajout d'une transition
  navbar.style.top = '0'; // Repositionner la barre de navigation en haut
  navbar.style.opacity = '1'; // Afficher la barre de navigation
  navbar.style.backgroundColor = '#votrecouleur'; // Définir la couleur de fond (remplacer par la couleur souhaitée)
}

function startHideTimeout() {
  hideTimeout = setTimeout(hideNavbar, 2000); // Démarrer le délai pour masquer après 3 secondes (ajustable)
}

function resetHideTimeout() {
  clearTimeout(hideTimeout); // Effacer tout délai de masquage en attente
  startHideTimeout(); // Redémarrer le délai
}

function handleMouseLeave(event) {
  const relatedTarget = event.relatedTarget; // Vérifier si la souris quitte vers l'extérieur du document
  if (!relatedTarget || !relatedTarget.closest('.navbar')) { // Masquer uniquement si la souris quitte la barre de navigation
    resetHideTimeout();
  }
}

function handleMouseEnter() {
  clearTimeout(hideTimeout); // Effacer tout délai de masquage en attente
  showNavbar();
}

function handleMouseMove(event) {
  const mouseY = event.clientY; // Position verticale de la souris
  const headerHeight = header.offsetHeight; // Hauteur de l'en-tête

  if (mouseY <= headerHeight + 10) { // Afficher la navbar si la souris se trouve à 10px du haut de l'en-tête
    showNavbar();
    resetHideTimeout(); // Redémarrer le délai de masquage
  }
}

navbar.addEventListener('mouseleave', handleMouseLeave);
document.addEventListener('mouseenter', handleMouseEnter); // Écouter le 'mouseenter' sur le document entier
document.addEventListener('mousemove', handleMouseMove); // Écouter le 'mousemove' sur le document entier

showNavbar(); // Afficher initialement la barre de navigation au chargement de la page
startHideTimeout(); // Démarrer le délai pour la masquer après un délai
