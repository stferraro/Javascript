let dia = prompt('Que dia vas a ver la pelicula? (ingresa lunes , martes, miercoles, jueves, viernes, sabado o domingo)');
let costo = 10;
let numero_ticket = parseInt(Math.random() * (1 + 31) + 1);
let sexo = 'hombre';
let edad = 0;   

if (numero_ticket == 21) {
    costo = 0;
}

if ((dia === 'lunes') && (numero_ticket != 21)) {
    costo = costo/2;
    alert(`el precio de la entrada es  ${costo}` + `$$`);
} else if ((dia === 'martes') && (numero_ticket != 21)) {
    let estudiante = confirm('eres estudiante?');
    if (estudiante) {
        costo = costo/2;
    }
    else {
        costo = 10;
    }
} else if ((dia === 'miercoles') && (numero_ticket != 21)) {
    let tipo_peliculo = confirm('Es pre-estreno?');
    if (tipo_peliculo) {
        costo += (costo * 30 / 100);
    }
} else if ((dia === 'jueves') && (numero_ticket != 21)) {
    sexo = confirm ('es usted mujer: ?');
    if (sexo) {
        costo -= (costo * 30 / 100);
        sexo = 'mujer';
    } 
} else if (((dia === 'viernes') || (dia === 'sabado') || (dia === 'domingo')) && (numero_ticket != 21)) {
    edad = prompt('cuantos años tienes?');
    if (edad <= 8) {
        costo -= (costo * 20 / 100);
    }
}

console.log (`el precio de la entrada es  ${costo}` + `$$` ,
       `\ntu numero de ticket es ${numero_ticket}`, 
       `\nel dia de la semana es ${dia}`,
       `\nel sexo es ${sexo}`,
       `\nla edad es ${edad}`
       );

alert (`el precio de la entrada es  ${costo}` + `$$` ,
       `\ntu numero de ticket es ${numero_ticket}`, 
       `\nel dia de la semana es ${dia}`,
       `\nel sexo es ${sexo}`,
       `\nla edad es ${edad}`
       );

p.innerHTML = (
        `\ntu numero de ticket es ${numero_ticket}, 
        \nel dia de la semana es ${dia},
        \nel sexo es ${sexo},
        \nla edad es ${edad},
        \nel precio de la entrada es  ${costo}` + `$$`
);

    

    


