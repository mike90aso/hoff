// Update phone in one place
const PHONE_DISPLAY = "(407) 855-7199";
const PHONE_TEL = "+14078557199";

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-phone]").forEach((el) => {
  el.textContent = PHONE_DISPLAY;
});

document.querySelectorAll('a[href^="tel:"]:not([href*="7237"])').forEach((link) => {
  link.href = `tel:${PHONE_TEL}`;
});

const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.getElementById("primary-nav");

if (siteHeader && menuToggle && primaryNav) {
  const setNavOpen = (open) => {
    siteHeader.classList.toggle("nav-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  menuToggle.addEventListener("click", () => {
    setNavOpen(!siteHeader.classList.contains("nav-open"));
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setNavOpen(false);
    }
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", (event) => {
    if (event.matches) {
      setNavOpen(false);
    }
  });
}
