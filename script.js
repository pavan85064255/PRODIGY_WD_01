// Navbar background color on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if(window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle (optional)
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
if(menuToggle) {
  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });
}

// Highlight active nav link based on current page
document.querySelectorAll('nav ul li a').forEach(link => {
  if(link.href === window.location.href) {
    link.classList.add('active');
  }
});
