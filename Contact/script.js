// ============================================
// Voyage — Contact Page interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const mainNav = document.getElementById('mainNav');

  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  // Contact form submission
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const inquiry = document.getElementById('inquiry').value.trim();

      if (!fullName || !email || !inquiry) {
        formNote.style.color = '#B3453A';
        formNote.textContent = 'Please fill in every field before sending.';
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        formNote.style.color = '#B3453A';
        formNote.textContent = 'Please enter a valid email address.';
        return;
      }

      // Simulate a successful send
      formNote.style.color = '#3E7A4F';
      formNote.textContent = `Thank you, ${fullName}. Your message has been sent — we'll be in touch soon.`;
      form.reset();
    });
  }

  // Map pin popup toggle (click to show/hide on small screens)
  const mapPin = document.querySelector('.map-pin');
  if (mapPin) {
    const popup = mapPin.querySelector('.map-popup');
    mapPin.addEventListener('click', () => {
      popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
    });
  }

  // Map zoom buttons (purely visual scale effect)
  const canvas = document.getElementById('mapCanvas');
  const zoomButtons = document.querySelectorAll('.map-zoom button');
  let zoomLevel = 1;

  zoomButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      zoomLevel = index === 0 ? Math.min(zoomLevel + 0.15, 1.6) : Math.max(zoomLevel - 0.15, 1);
      const svg = canvas.querySelector('.map-svg');
      svg.style.transform = `scale(${zoomLevel})`;
      svg.style.transformOrigin = 'center';
      svg.style.transition = 'transform 0.25s ease';
    });
  });

  // "Send Us a Message" button in map side panel scrolls to form
  const mapSideBtn = document.querySelector('.map-side-btn');
  if (mapSideBtn) {
    mapSideBtn.addEventListener('click', () => {
      const nameField = document.getElementById('fullName');
      if (nameField) {
        nameField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        nameField.focus();
      }
    });
  }

});