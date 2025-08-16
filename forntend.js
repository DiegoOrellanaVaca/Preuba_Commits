document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app') || document.body;

    const heading = document.createElement('h1');
    heading.textContent = '¡Hola, Frontend básico!';

    const button = document.createElement('button');
    button.textContent = 'Haz clic aquí';
    button.onclick = () => alert('¡Botón clickeado!');

    app.appendChild(heading);
    app.appendChild(button);
});