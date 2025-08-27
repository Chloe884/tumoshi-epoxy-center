document.addEventListener("DOMContentLoaded", function () {
  // ------------------ Animation Hero ------------------
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(-60px)";
    void heroContent.offsetWidth;
    heroContent.style.animation =
      "slideDown 1s cubic-bezier(.77,0,.18,1) forwards";
  }

  // ------------------ Diaporama principal ------------------
  const heroSlides = document.querySelectorAll(".slideshow-container .slide");
  let currentHeroSlide = 0;

  function showHeroSlide(idx) {
    heroSlides.forEach((slide, i) => {
      slide.style.display = i === idx ? "block" : "none";
    });
  }

  if (heroSlides.length > 0) {
    showHeroSlide(currentHeroSlide);
    setInterval(() => {
      currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
      showHeroSlide(currentHeroSlide);
    }, 3500);
  }

  // ------------------ Modales Services ------------------
  const serviceCards = document.querySelectorAll(".service-card");
  const modals = document.querySelectorAll(".service-modal");
  const closeButtons = document.querySelectorAll(".close");

  serviceCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const modal = document.getElementById(`modal-service${index + 1}`);
      if (modal) modal.style.display = "block";
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".service-modal");
      if (modal) modal.style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    modals.forEach((modal) => {
      if (e.target === modal) modal.style.display = "none";
    });
  });

  // ------------------ Galerie Slider ------------------
  const slider = document.querySelector(".slider");
  if (slider) {
    const slidesContainer = slider.querySelector(".slides");
    const images = slider.querySelectorAll(".slides img");
    const dotsContainer = slider.querySelector(".dots");
    let current = 0;

    dotsContainer.innerHTML = "";
    images.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        current = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function updateSlider() {
      const slideWidth = slider.clientWidth;
      slidesContainer.style.transform = `translateX(-${current * slideWidth}px)`;
      dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
    }

    function nextSlideGallery() {
      current = (current + 1) % images.length;
      updateSlider();
    }

    setInterval(nextSlideGallery, 4000);
    window.addEventListener("resize", updateSlider);
    updateSlider();
  }

  // ------------------ Menu déroulant responsive ------------------
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // ------------------ Choix de la langue ------------------
  document.addEventListener("DOMContentLoaded", function () {
  const langToggle = document.getElementById("langToggle");
  if (!langToggle) return;

  // Récupère la langue actuelle
  let currentLang = localStorage.getItem("lang") || "fr";

  // Fonction pour mettre à jour le texte du bouton
  function updateLangButton() {
    langToggle.textContent = currentLang === "fr" ? "🌐En" : "🌐Fr";
  }

  // Applique le texte initial
  updateLangButton();

  // Traduit la page au chargement
  if (typeof translatePage === "function") {
    translatePage(currentLang);
  }

  // Gestion du clic
  langToggle.addEventListener("click", function (e) {
    e.preventDefault();

    // Bascule la langue
    currentLang = currentLang === "fr" ? "en" : "fr";

    // Sauvegarde dans localStorage
    localStorage.setItem("lang", currentLang);

    // Met à jour le bouton
    updateLangButton();

    // Change l'attribut lang de la page
    document.documentElement.lang = currentLang;

    // Traduit la page immédiatement
    if (typeof translatePage === "function") {
      translatePage(currentLang);
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const langToggle = document.getElementById("langToggle");
  if (!langToggle) return;

  // Récupère la langue actuelle depuis localStorage
  let currentLang = localStorage.getItem("lang") || "fr";

  // Initialise le texte du bouton
  langToggle.textContent = (currentLang === "fr") ? "🌐En" : "🌐Fr";

  // Gestion du clic
  langToggle.addEventListener("click", e => {
    e.preventDefault();

    // Bascule la langue
    currentLang = (currentLang === "fr") ? "en" : "fr";

    // Sauvegarde dans localStorage
    localStorage.setItem("lang", currentLang);

    // Met à jour le bouton
    langToggle.textContent = (currentLang === "fr") ? "🌐En" : "🌐Fr";

    // Met à jour l'attribut lang
    document.documentElement.lang = currentLang;

    // Traduit la page immédiatement
    if (typeof translatePage === "function") {
      translatePage(currentLang);
    }
  });
});
});
