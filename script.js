const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// fecha o menu quando clicar em um link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


const projectCards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });

}, {
    threshold: 0.3
});

projectCards.forEach(card => {
    observer.observe(card);
});