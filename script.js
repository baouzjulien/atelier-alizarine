document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne tous les liens sauf le dropdown-toggle
  document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)')
    .forEach(function(navLink) {
      navLink.addEventListener('click', function () {
        var navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: true
          });
        }
      });
    });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Sélectionne toutes les miniatures
document.querySelectorAll('.galerie-img img').forEach(img => {
  img.addEventListener('click', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';   // affiche le lightbox
    lightboxImg.src = this.src.replace("-thumbnail", "");        // met l’image cliquée
  });
});

// Fermer au clic sur le bouton
document.querySelector('.lightbox .close').addEventListener('click', function() {
  document.getElementById('lightbox').style.display = 'none';
});

// Fermer au clic n’importe où dans le fond
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) { // uniquement si on clique sur le fond
    this.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  // Vérifie si l'utilisateur a déjà donné son choix
  if (localStorage.getItem("cookiesConsent")) {
    banner.style.display = "none";
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesConsent", "accepted");
    banner.style.display = "none";
    // 👉 Ici tu peux activer tes scripts externes (FB, Insta, Analytics)
  });

  rejectBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesConsent", "rejected");
    banner.style.display = "none";
    // 👉 Ici tu peux bloquer ou ne pas charger les scripts externes
  });
});