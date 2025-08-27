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
   const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


  // ------------------ Choix de la langue ------------------
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    let currentLang = localStorage.getItem("lang") || "fr";

    function updateLangButton() {
      langToggle.textContent = currentLang === "fr" ? "🌐En" : "🌐Fr";
    }

    updateLangButton();
    document.documentElement.lang = currentLang;

    if (typeof translatePage === "function") translatePage(currentLang);

    langToggle.addEventListener("click", function (e) {
      e.preventDefault();
      currentLang = currentLang === "fr" ? "en" : "fr";
      localStorage.setItem("lang", currentLang);
      updateLangButton();
      document.documentElement.lang = currentLang;
      if (typeof translatePage === "function") translatePage(currentLang);
    });
  }

  // ------------------ Traduction Français/Anglais ------------------
  function translatePage(lang) {
    // Exemple de dictionnaire de traduction
    const translations = {
      fr: {
        accueil: "Accueil",
        services: "Nos Services",
        galerie: "Galerie Réalisations",
        avis: "Avis clients",
        contact: "Contact",
        heroTitle: "Transformez votre garage en espace de rêve",
        heroText: "Solutions sur mesure pour optimiser, organiser et sublimer votre garage.",
        cta: "Demander un devis"
        // Ajoute d'autres clés/valeurs ici selon tes besoins
      },
      en: {
        accueil: "Home",
        services: "Our Services",
        galerie: "Gallery",
        avis: "Testimonials",
        contact: "Contact",
        heroTitle: "Transform your garage into a dream space",
        heroText: "Custom solutions to optimize, organize and enhance your garage.",
        cta: "Request a quote"
        // Ajoute d'autres clés/valeurs ici selon tes besoins
      }
    };

    // Exemple d'application : adapte les sélecteurs à ton HTML
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }
});
