function ecuaciones(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    let discriminante = b*b - 4*a*c;

    if (discriminante < 0) {
        document.getElementById("soluciones").innerHTML = "La ecuación no tiene soluciones reales";
    } else if (discriminante == 0) {
        let x = -b/(2*a);
        document.getElementById("soluciones").innerHTML = "La ecuación tiene una solución real: x = " + x;
    } else {
        let x1 = (-b + Math.sqrt(discriminante))/(2*a);
        let x2 = (-b - Math.sqrt(discriminante))/(2*a);
        document.getElementById("soluciones").innerHTML = `Las soluciones reales son: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    }
    console.log("Las soluciones reales son: x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2));

}