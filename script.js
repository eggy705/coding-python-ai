// Animasi Muncul Saat Scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.25
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

const revealElements = document.querySelectorAll('.reveal, .card');
revealElements.forEach(el => observer.observe(el));

// Parallax effect sederhana pada teks hero
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.transform = `translateY(${scrollValue * 0.5}px)`;
    heroContent.style.opacity = 1 - (scrollValue / 600);
});
