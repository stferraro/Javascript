function pregunta_nombre(){
    let nombre = prompt("Cual es tu nombre?");
    h2 = document.createElement("h2");
    h2.innerHTML = `Hola ${nombre} bienvenido al juego de adivina el numero`;
    document.body.appendChild(h2);
}

function adivina(){
    let numero = Math.floor(Math.random()*100);
    let intento = parseInt(prompt("Adivina un numero entre 1 y 100"));

    while(intento != numero){
        if(intento > numero){
            alert("El numero es menor");
        }else{
            alert("El numero es mayor");
        }
        intento = parseInt(prompt("Intenta de nuevo"));
    }
    alert("Felicidades, adivinaste");
    let p = document.createElement("p");
    p.innerHTML = `El numero era ${numero}`;
    document.body.appendChild(p);
}

pregunta_nombre();
adivina()