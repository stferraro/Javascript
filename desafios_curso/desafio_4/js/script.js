let medicinas = [];
let precios = [];

function adicionarMedicamento() {
    let valor = prompt('Quieres agregar medicamentos al almacen de la farmacia s/n?');
    do {
        if (valor == 's') {
            let medicamento = prompt('Introduce el nombre del medicamento');
            let posicion = buscarMedicamento(medicamento);
            if (posicion != -1) {
                alert('El medicamento ya existe');
                let valor2 = prompt('Quieres cambiar el precio del medicamento s/n?');
                do {
                    if (valor2 == 's') {
                        let precio = parseFloat(prompt('Introduce el nuevo precio del medicamento'));
                        if (precio < 0) {
                            alert('El precio no puede ser negativo');
                        } else {
                            precios[posicion] = precio;
                            mostrarMedicamentos(medicinas, precios);
                        }
                    } else if (valor2 == 'n') {
                        break;
                    } else {
                        alert('Introduce s o n');
                        valor2 = prompt('Quieres cambiar el precio del medicamento s/n?');
                    }
                } while ((valor2 != 's') && (valor2 != 'n'));
            } else {
                medicinas.push(medicamento);
                let precio = parseFloat(prompt('Introduce el precio del medicamento'));
                if (precio < 0) {
                    alert('El precio no puede ser negativo');
                } else {
                    precios.push(precio);
                    mostrarMedicamentos(medicinas, precios);
                }
            }
            valor = prompt('Quieres agregar medicamentos al almacen de la farmacia s/n?');
        } else if (valor == 'n') {
            break;
        } else {
            alert('Introduce s o n');
            valor = prompt('Quieres agregar medicamentos al almacen de la farmacia s/n?');
        }
    } while ((valor != 's') || (valor != 'n'));
}


function buscarMedicamento(name) {
    for (let i = 0; i < medicinas.length; i++) {
        if (medicinas[i] == name) {
            return i;
        }
    }
    return -1;
}

function mostrarMedicamentos(medicinas, precios) {
    let p = document.getElementById('p');
    let str = '';
    for (let i = 0; i < medicinas.length; i++) {
        str += 'Medicamento: ' + medicinas[i] + ' Precio: ' + precios[i] + '<br\>';
        
    }
    p.innerHTML = str;
    console.log(str);
    alert(str);
}


adicionarMedicamento();
