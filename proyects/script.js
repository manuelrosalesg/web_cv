// Selecciona el body y el #content
const body = document.querySelector('body');
const content = document.querySelector('#content');


// Cambia el color del body cuando el cursor entra en el body
body.addEventListener('mouseenter', () => {
    body.style.backgroundColor = '#afafaf'; // Cambia a gris
    body.style.transform = 'scale(1.05)';
    body.style.transition = 'all 0.5s';
});

// Restaura el color del body cuando el cursor sale del body
body.addEventListener('mouseleave', () => {
    body.style.backgroundColor = '#e1e1e1'; // Vuelve a blanco
    body.style.transform = 'scale(1)';    

});

// Evita que el body cambie de color cuando el cursor está sobre el #content
content.addEventListener('mouseenter', () => {
    body.style.backgroundColor = '#e1e1e1'; // Mantiene el color blanco
    body.style.transform = 'scale(1)';
});

content.addEventListener('mouseleave', () => {
    body.style.backgroundColor = '#afafaf'; // Cambia a blanco cuando el cursor sale del #content
    body.style.transform = 'scale(1.05)';
});