document.addEventListener("DOMContentLoaded", function () {
  // ------------------ Animation Hero ------------------
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(-60px)";
    void heroContent.offsetWidth; // forcer reflow
    heroContent.style.animation =
      "slideDown 1s cubic-bezier(.77,0,.18,1) forwards";
  }

  // ------------------ Diaporama Principal ------------------
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(idx) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === idx);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(nextSlide, 3500);
}


  // ------------------ Modales Services ------------------
  const serviceCards = document.querySelectorAll(".service-card");
  const modals = document.querySelectorAll(".service-modal");
  const closeButtons = document.querySelectorAll(".close");

  // Ouvrir la modale correspondante
  serviceCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const modal = document.getElementById(`modal-service${index + 1}`);
      if (modal) modal.style.display = "block";
    });
  });

  // Fermer la modale via la croix
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".service-modal");
      if (modal) modal.style.display = "none";
    });
  });

  // Fermer la modale si clic en dehors du contenu
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

    // Créer les points
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

    // Auto-advance slides
    setInterval(nextSlideGallery, 4000);

    // Update on window resize
    window.addEventListener("resize", updateSlider);

    // Initial update
    updateSlider();
  }

  // ------------------ Menu Hamburger Responsive ------------------
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});
