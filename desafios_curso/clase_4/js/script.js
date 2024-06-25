
let total_vendedores = prompt('Cuantos vendedores hay?');

let vendedores = [];
let edades = [];
let sueldos = [];
let porcentajes = [];
let montos = [];
let bonos = [];
let totales = [];
let str = '';

for (let i = 0; i < total_vendedores; i++) {

    let sueldo = prompt('Cual es el sueldo del vendedor' + ` ${i + 1} ?`);

    while (sueldo <= 0) {

        sueldo = prompt('Error, Cual es el sueldo del vendedor, ingresa un valor positivo' + ` ${i + 1} ?`);
        
    }

    let monto_ventas = prompt('Cual es el monto de ventas del vendedor' + ` ${i + 1} ?`);

    while (monto_ventas < 0) {

        monto_ventas = prompt('Error, Cual es el monto de ventas del vendedor, ingresa un valor positivo' + ` ${i + 1} ?`);
        
    }

    let porcentaje = calcular_porcentaje(monto_ventas);

    let edad = prompt('Cual es la edad del vendedor' + ` ${i + 1} ?`);

    while (edad <= 0) {

        edad = prompt('Error, Cual es la edad del vendedor, ingresa un valor positivo' + ` ${i + 1} ?`);
        
    }

    let ganancia_porcentaje = calcular_ganancia(porcentaje, monto_ventas);

    let sexo = prompt('Cual es el sexo del vendedor' + ` ${i + 1} ?`);
     
    while (sexo != 'hombre' && sexo != 'mujer') {

        sexo = prompt('Error, Cual es el sexo del vendedor, ingresa hombre o mujer?' + ` ${i + 1}`);
        
    }

    let bono = calcular_bono(edad, sexo);

    let total = parseFloat(sueldo) + parseFloat(ganancia_porcentaje) + parseFloat(bono);


    vendedores.push(i);
    edades.push(edad)
    sueldos.push(sueldo)
    porcentajes.push(calcular_porcentaje(monto_ventas));
    montos.push(ganancia_porcentaje);
    bonos.push(bono);
    totales.push(total);

    str += `  \nEl ingreso del vendedor ${i + 1} esta basado en: ${sueldo}, 
           el monto mensual de sus ventas: ${monto_ventas}, 
           la edad del vendedor: ${edad}, 
           el porcentaje de ganancia: ${ganancia_porcentaje}, 
           el monto de comision por venta es: ${porcentaje},
           bono tercera edad: ${bono},
           Total ingreso: ${total.toFixed(2)}`;

    alert(str);
    console.log(str);
    p.innerHTML = str;
}

function calcular_porcentaje(monto_ventas) {
    let porcentaje = 0;

    switch (true) {

        case monto_ventas > 0 && monto_ventas < 75000:
            porcentaje = 5;
            break;

        case monto_ventas >=90000 && monto_ventas < 200000:
            porcentaje = 7;
            break;

        case monto_ventas >= 300000 && monto_ventas < 1000000:
            porcentaje = 8;
            break;

        case monto_ventas >= 1500000:
            porcentaje = 10;
            break;

        default:
            porcentaje = 6;
            break;
    }

    return porcentaje;
}

function calcular_ganancia(porcentaje, monto_ventas) {
    let percent = parseFloat(porcentaje);
    let monto_v = parseFloat(monto_ventas);
    return (monto_v * percent) / 100;

}

function calcular_bono (edad , sexo) {

    let bono = 0;

    switch (true) {

        case sexo == 'hombre' && edad >= 60:
            bono = 40000;
            break;

        case sexo == 'mujer' && edad >= 55:
            bono = 40000;
            break;

        default:
            bono = 0;
            break;
    }

    return bono;

}

