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









// Efeito Imagem

const imagem = document.querySelector('img');

imagem.addEventListener('mousemove', (e) => {
    const rect = imagem.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (offsetX - centerX) / centerX;
    const deltaY = (offsetY - centerY) / centerY;

    imagem.style.transform = `rotateX(${deltaY * 15}deg) rotateY(${deltaX * 15}deg) scale(1.1)`;
});

document.querySelector('.img-sbr').addEventListener('mouseleave', () => {
    imagem.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});