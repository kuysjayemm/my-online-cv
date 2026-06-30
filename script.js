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