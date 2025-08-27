// Récupère la langue choisie sur l'accueil ou met "fr" par défaut
const savedLang = localStorage.getItem("lang") || "fr";

// Définit l'attribut lang de la page
document.documentElement.lang = savedLang;

// Dictionnaire de traductions pour contact + accueil
const translations = {
  fr: {
    // Contact
    contact_header: "Contactez-Nous",
    company_title: "CONTACTEZ TUMOSHI EPOXY'S CENTER",
    address_label: "Adresse :",
    phone_label: "Téléphone :",
    email_label: "Email :",
    follow_label: "Suivez-nous :",
    form_title: "ENVOYEZ UN MESSAGE",
    label_name: "Nom",
    label_email: "Email",
    label_message: "Message",
    button_send: "Envoyer",

    // Accueil - Navbar
    services_label: "Services",
    galerie_label: "Galerie",
    avis_label: "Avis",
    contact_label: "Contact",

    // Accueil - Slideshow
    slideshow_title: "Transformez vos espaces comme vous le souhaitez",
    slideshow_text: "Des solutions sur mesure pour optimiser, personnaliser et sublimer votre espace.",
    slideshow_cta: "Contactez-nous",

    // Accueil - Services
    services_title: "Nos Services",
    service1_title: "Revêtement avec résine epoxy",
    service1_description: "Des sols résistants, esthétiques et faciles à entretenir.",
    service2_title: "Formation en résine époxy",
    service2_description: "Nous vous proposons des formations professionnelles dans nos locaux.",
    service3_title: "Vente des matériels",
    service3_description: "Du matériel de base pour les débutants.",

    // Accueil - Galerie
    gallery_title: "Galerie des Réalisations",

    // Accueil - Avis
    reviews_title: "Pourquoi nous?",
    review1_text: "Nous sommes une equipe de professionnel engagés",
    review1_author: "- team tumoshi",
    review2_text: "Nous travaillons avec du materiel de très haute qualité",
    review2_author: "- team tumoshi",

    // Accueil - Hero
    home_link: "Accueil",
    services_link: "Nos Services",
    gallery_link: "Galerie Réalisations",
    reviews_link: "Pourquoi nous?",
    contact_link: "Contact",

    // Footer
    footer_text1: "© 2025 Tumoshi epoxy's center. Tous droits réservés."
  },

  en: {
    // Contact
    contact_header: "Contact Us",
    company_title: "CONTACT TUMOSHI EPXY'S CENTER",
    address_label: "Address:",
    phone_label: "Phone:",
    email_label: "Email:",
    follow_label: "Follow Us:",
    form_title: "SEND A MESSAGE",
    label_name: "Name",
    label_email: "Email",
    label_message: "Message",
    button_send: "Send",

    // Accueil - Navbar
    services_label: "Services",
    galerie_label: "Gallery",
    avis_label: "Reviews",
    contact_label: "Contact",

    // Accueil - Slideshow
    slideshow_title: "Transform your spaces the way you want",
    slideshow_text: "Tailored solutions to optimize, personalize and enhance your space.",
    slideshow_cta: "Contact us",

    // Accueil - Services
    services_title: "Our Services",
    service1_title: "Epoxy Resin Flooring",
    service1_description: "Durable, aesthetic, and easy-to-maintain floors.",
    service2_title: "Epoxy Resin Training",
    service2_description: "We offer professional training in our facilities.",
    service3_title: "Material Sales",
    service3_description: "Basic materials for beginners.",

    // Accueil - Galerie
    gallery_title: "Gallery of Works",

    // Accueil - Avis
    reviews_title: "Why us?",
    review1_text: "We are a team of committed professionals",
    review1_author: "- team tumoshi",
    review2_text: "We work with very high-quality materials",
    review2_author: "- team tumoshi",

    // Accueil - Hero
    home_link: "Home",
    services_link: "Our Services",
    gallery_link: "Gallery",
    reviews_link: "Why us?",
    contact_link: "Contact",

    // Footer
    footer_text1: "© 2025 Tumoshi epoxy's center. All rights reserved."
  }
};

function translatePage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Applique la traduction au chargement
translatePage(savedLang);

document.getElementById('langToggle').addEventListener('click', function() {
  // Bascule la langue
  const newLang = (document.documentElement.lang === 'fr') ? 'en' : 'fr';
  localStorage.setItem('lang', newLang);
  document.documentElement.lang = newLang;
  translatePage(newLang);
});
