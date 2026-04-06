// Sticky Navbar Logic (Aapka purana code)
window.onscroll = function() {
    const nav = document.getElementById('navbar');
    if (window.pageYOffset > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
};

// Mobile Menu Toggle Logic
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Icon change: Bar se X (Close) banana
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Link click hone par menu band ho jaye
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});