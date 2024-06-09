class Vendedor {

    constructor (sueldo, monto_ventas, sexo, edad) {
        this.sueldo = sueldo;
        this.monto_ventas = monto_ventas;
        this.sexo = sexo;
        this.edad = edad;
    }

    calcular_porcentaje(monto_ventas) {
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

    calcular_ganancia(porcentaje, monto_ventas) {
        let percent = parseFloat(porcentaje);
        let monto_v = parseFloat(monto_ventas);
        return (monto_v * percent) / 100;
    }

    calcular_bono(edad, sexo) {
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
}

class Empresa {
    constructor (vendedores) {
        this.vendedores = [];
    }

    add_vendedor(sueldo, monto_ventas, sexo, edad) {
        const nuevo_vendedor = new Vendedor(sueldo, monto_ventas, sexo, edad);
        this.vendedores.push(nuevo_vendedor);
    }
}


empresa = new Empresa();

vendedores = [];

num_vendedores = prompt('Cuantos vendedores hay?');
let str = '';

for (let i = 0; i < num_vendedores; i++) {

    let sueldo = prompt('Cual es el sueldo del vendedor' + ` ${i + 1} ?`);
    while (sueldo <= 0) {
        sueldo = prompt('Error, Cual es el sueldo del vendedor, ingresa un valor positivo' + ` ${i + 1} ?`);
    }
    let monto_ventas = prompt('Cual es el monto de ventas del vendedor' + ` ${i + 1} ?`);
    while (monto_ventas < 0) {
        monto_ventas = prompt('Error, Cual es el monto de ventas del vendedor, ingresa un valor positivo' + ` ${i + 1} ?`);
    }
    let sexo = prompt('Cual es el sexo del vendedor' + ` ${i + 1} ?`);
    while (sexo != 'hombre' && sexo != 'mujer') {
        sexo = prompt('Error, Cual es el sexo del vendedor, ingresa hombre o mujer?' + ` ${i + 1}`);
    }
    let edad = prompt('Cual es la edad del vendedor' + ` ${i + 1} ?`);
    while (edad <= 0) {
        edad = prompt('Error, Cual es la edad del vendedor, ingresa un valor positivo' + ` ${i + 1} ?`);
    }
    vendedores.push(new Vendedor(sueldo, monto_ventas, sexo, edad));
    empresa.add_vendedor(sueldo, monto_ventas, sexo, edad);

    let porcentaje = vendedores[i].calcular_porcentaje(monto_ventas);
    let ganancia_porcentaje = vendedores[i].calcular_ganancia(porcentaje, monto_ventas);
    let bono = vendedores[i].calcular_bono(edad, sexo);
    total = parseFloat(sueldo) + parseFloat(ganancia_porcentaje) + parseFloat(bono);
    str += `  \nEl ingreso del vendedor ${i + 1} esta basado en: ${sueldo} $$, 
           el monto mensual de sus ventas: ${monto_ventas}, 
           la edad del vendedor: ${edad},
           el porcentaje de comision: ${porcentaje} %, 
           la ganancia por ventas es: ${ganancia_porcentaje} $$, 
           el monto de comision por venta es: ${porcentaje} $$,
           bono tercera edad: ${bono} $$,
           Total ingreso: ${total.toFixed(2)}`;
    console.log(str);
    alert(str);
    p.innerHTML = str;
}

