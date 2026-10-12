// PixelCraft Studio demo interactions.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }));
  }
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  // IMPORTANT: Replace the placeholder with your WhatsApp number including country code.
  // India example format: 91XXXXXXXXXX (digits only; do not include + or spaces).
  const whatsappNumber = "919569353447";
  const whatsappMessage = "Hi PixelCraft Studio, I'd like to discuss a website project.";
  document.querySelectorAll("[data-whatsapp]").forEach(link => {
    link.href = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappMessage);
    link.addEventListener("click", event => {
      if (whatsappNumber.includes("YOURNUMBER")) {
        event.preventDefault();
        alert("Demo setup: open script.js and replace 91YOURNUMBER with your WhatsApp number, including India's 91 country code.");
      }
    });
  });
});