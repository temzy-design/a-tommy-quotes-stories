// Newsletter Form Submission
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for subscribing!");
});

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been sent. We'll get back to you soon!");
});
// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});
// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Dropdown Toggle for Mobile
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', () => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('active');
  });
});
// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const dropdowns = document.querySelectorAll('.dropdown > a');

// Toggle Hamburger Menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Toggle Dropdowns on Mobile
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent link default action
    const dropdownMenu = dropdown.nextElementSibling; // Select the associated dropdown menu
    dropdownMenu.classList.toggle('active');
  });
});
