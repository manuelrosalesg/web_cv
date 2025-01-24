// Selecciona el body y el #content
const body = document.querySelector('body');
const content = document.querySelector('#content');
const box = document.querySelector('#black-box');
const image = document.querySelector('img');


// Cambia el color del body cuando el cursor entra en el body
body.addEventListener('mouseenter', () => {
    body.style.backgroundColor = '#afafaf'; // Cambia a gris
    box.style.backgroundColor = '#afafaf';
    body.style.transform = 'scale(1.05)';
    body.style.transition = 'all 0.5s';
    box.style.transition = 'all 0.5s';
    image.style.transition = 'all 0.5s';
});

// Restaura el color del body cuando el cursor sale del body
body.addEventListener('mouseleave', () => {
    body.style.backgroundColor = '#e1e1e1'; // Vuelve a blanco
    box.style.backgroundColor = '#000000';
    body.style.transform = 'scale(1)';    

});

// Evita que el body cambie de color cuando el cursor está sobre el #content
content.addEventListener('mouseenter', () => {
    body.style.backgroundColor = '#e1e1e1'; // Mantiene el color blanco
    box.style.backgroundColor = '#000000';
    body.style.transform = 'scale(1)';
});

content.addEventListener('mouseleave', () => {
    body.style.backgroundColor = '#afafaf'; // Cambia a blanco cuando el cursor sale del #content
    box.style.backgroundColor = '#afafaf';
    body.style.transform = 'scale(1.05)';
});


