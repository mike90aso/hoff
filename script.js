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
