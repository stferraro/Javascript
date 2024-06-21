// Inicializar los arreglos paralelos
let nombres = ["articulo1", "articulo2", "articulo3"];
let cantidades = [1, 5, 10];

// Función para adicionar o sustraer
function adicionaOSustrae(nombre, cantidad, accion) {
    let indice = nombres.indexOf(nombre);
    if (indice !== -1) {
        if (accion === "adicionar") {
            cantidades[indice] += cantidad;
        } else if (accion === "sustraer") {
            cantidades[indice] -= cantidad;
        }
        console.log(`Acción: ${accion}, Nombre: ${nombre}, Cantidad: ${cantidad}`);
        console.log(`Nuevo estado de cantidades: ${cantidades}`);
    } else {
        alert("Artículo no encontrado.");
    }
}

// Función para manejar la acción
function realizarAccion(control) {
    let nombre = prompt("Ingrese el nombre del artículo:");
    if (nombres.includes(nombre)) {
        let cantidad = parseInt(prompt("Ingrese la cantidad:"));
        if (!isNaN(cantidad)) {
            adicionaOSustrae(nombre, cantidad, control);
            mostrarInformacion();
        } else {
            alert("Por favor, ingrese un número válido.");
        }
    } else {
        alert("Artículo no encontrado.");
    }
}

// Función para mostrar la información de los artículos
function mostrarInformacion() {
    let info = "";
    for (let i = 0; i < nombres.length; i++) {
        info += `nombre: ${nombres[i]}; cantidad: ${cantidades[i]}\n`;
    }
    alert(info);
    console.log(info);
}

// Asignar eventos a los divs de agregar y sustraer
document.getElementById("adicionar").onclick = function(event) {
    event.stopPropagation();
    realizarAccion('adicionar');
};
document.getElementById("sustraer").onclick = function(event) {
    event.stopPropagation();
    realizarAccion('sustraer');
};

// Mostrar información al hacer click en el contenedor
document.getElementById("contenedor").onclick = function() {
    mostrarInformacion();
};
