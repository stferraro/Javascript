function cambia_color() {
    
    let p = document.getElementById("pMouse");
    p.style.color = "black";
    p.style.fontSize = "20px";
    p.style.fontWeight = "bold";
    p.style.backgroundColor = "red";
    p.innerHTML += "Cambio de color al pasar el mouse";
    console.log("Cambio de color al pasar el mouse");
}