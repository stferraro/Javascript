document.addEventListener('DOMContentLoaded', addSpinner);

function addSpinner() {
    let spin = document.getElementById('spin');
    spin.style.display = 'flex';
}

function quitSpinner() {
    let spin = document.getElementById('spin');
    spin.style.display = 'none';
}

window.onload = quitSpinner;

function enviarNombre() {
    let nombre = document.getElementById('nombre').value;
    if (nombre == '') {
        alert('Por favor, introduce tu nombre');
        document.getElementById('form').innerHTML += '';
    } else {
        document.getElementById('form').innerHTML += `Bienvenido ${nombre}!`;
    }
}
