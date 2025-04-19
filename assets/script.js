//Dark/Light Mode

const themeToggle = document.getElementById('toggle-theme');

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
});

// Menu Responsivo

document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.menu-hamburger');
    const navLinks = document.querySelector('.nav-links');
    const menuLinks = document.querySelectorAll('.nav-links a');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
  });


// Efeito Escrita

const text = document.getElementById("efeito-digitando");

const textToType = text.innerHTML;

let currentCharIndex = 0;
const typingSpeed = 100;

text.innerHTML = "";

function typeWriter() {
    if (currentCharIndex < textToType.length) {
        text.innerHTML += textToType.charAt(currentCharIndex);
        currentCharIndex++;

        setTimeout(typeWriter, typingSpeed);
    }
}

typeWriter();
