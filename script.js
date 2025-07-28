/*
 * script.js
 * Handles theme switching and smooth scrolling for Dad's Electrical website.
 */

// Attach event listeners once the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
  // Theme switching
  const swatches = document.querySelectorAll('.swatch');
  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      const theme = swatch.dataset.theme;
      // Remove existing theme classes from body
      document.body.classList.remove('theme1', 'theme2', 'theme3', 'theme4', 'theme5');
      // Add the selected theme
      document.body.classList.add(theme);
    });
  });

  // Gallery lightbox functionality
  const galleryImages = document.querySelectorAll('.gallery-grid img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  });

  // Expose a global function to close the lightbox when clicking outside
  window.closeLightbox = function() {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  };
});

// Smooth scroll function used by the hero button
function scrollToSection(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}