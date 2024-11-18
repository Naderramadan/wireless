// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll event for changing header background
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let scrollPos = window.scrollY;

    if (scrollPos > 50) {
        header.style.backgroundColor = "#222"; // Darker background for header when scrolling
        header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
    } else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }
});

// Hover effect on 'Leistungen' cards for interactive animations
const leistungCards = document.querySelectorAll('.leistung-card');
leistungCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "translateY(-10px)";
        card.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
    });
});

// Hover effect on images in the gallery
const galleryImages = document.querySelectorAll('.image-gallery img');
galleryImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = "scale(1.05)";
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = "scale(1)";
    });
});

// Add sticky navbar on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});
