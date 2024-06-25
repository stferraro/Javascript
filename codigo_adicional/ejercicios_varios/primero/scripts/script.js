function saludar(){
    document.getElementById("parrafoSaludo").innerHTML += ' Mi nombre es Gerardo Ferraro';
    console.log("Mi nombre es Gerardo Ferraro");
}

function reset(){
    document.getElementById("parrafoSaludo").innerHTML = 'Hola mundo';
}

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let color = document.getElementById("color").value;
    alert(`el color es ${color}`);
    document.getElementById("pMouse").style.color = color;
    console.log(`el color es ${color}`);
});