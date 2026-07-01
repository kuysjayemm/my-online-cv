// Dark/Light Mode Switcher
const themeToggleBtn = document.getElementById('theme-toggle');
const icon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';

    if (currentTheme !== 'dark') {
        newTheme = 'dark';
        icon.classList.replace('fa-moon', 'fa-sun');
        themeToggleBtn.classList.replace('btn-outline-light', 'btn-outline-warning');
    } else {
        newTheme = 'light';
        icon.classList.replace('fa-sun', 'fa-moon');
        themeToggleBtn.classList.replace('btn-outline-warning', 'btn-outline-light');
    }

    document.documentElement.setAttribute('data-theme', newTheme);
});

// Simple Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your message has been "sent" successfully (simulated).`);
    this.reset();
});
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        // Correct way to apply !important dynamically
        backToTopBtn.style.setProperty("display", "flex", "important");
    } else {
        // Correct way to hide it with !important dynamically
        backToTopBtn.style.setProperty("display", "none", "important");
    }
});

// Select all navigation links inside the collapsible menu
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  const menuToggle = document.getElementById('navbarNav'); // Replace with your actual navbar target ID if different
  
  // Create a Bootstrap collapse instance
  const bsCollapse = menuToggle ? new bootstrap.Collapse(menuToggle, { toggle: false }) : null;

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // Check if the mobile menu is currently open/visible
      if (menuToggle && menuToggle.classList.contains('show')) {
        bsCollapse.hide();
      }
    });
  });