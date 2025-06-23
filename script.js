// Navigation Menu Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Toggle Navigation
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
};

// Scroll Effect for Navigation
const scrollEffect = () => {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
};

// Form Submission
const handleForm = () => {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Here you would typically send the form data to your backend
            // For now, let's just simulate a successful submission
            
            const formData = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            };
            
            console.log('Form data:', formData);
            
            // Reset form
            form.reset();
            
            // Show success message
            alert('Thanks for reaching out! I\'ll get back to you soon.');
        });
    }
};

// Initialize functions
const app = () => {
    navSlide();
    scrollEffect();
    handleForm();
};

document.addEventListener('DOMContentLoaded', app);
