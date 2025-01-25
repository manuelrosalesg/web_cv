const image = document.querySelector('img');

// Cambia el color del body cuando el cursor entra en el body
body.addEventListener('mouseenter', () => {
    image.style.transition = 'all 0.5s';
});