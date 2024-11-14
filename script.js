// Select elements
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#nav-links a');
const sections = document.querySelectorAll('section');
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-links');

// Scroll Event for Navbar Color Change
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Highlight Active Link
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Smooth Scroll
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});
