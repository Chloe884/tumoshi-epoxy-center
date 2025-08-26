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
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.style.display = i === idx ? "block" : "none";
    });
  }

  if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
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
});
