 function subir() {
    let valor = confirm("Desea ir arriba?");  
    if (valor === true) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}

function cambiar_color_fondo(event) {
    event.stopPropagation();
    let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Pink', 'Black', 'Brown', 'Purple', 'Cyan', 'Gray', 'Orange', 'Lime', 'Crimson', 'YellowGreen', 'Olive', 'Teal'];
    let a = colors[Math.floor(Math.random() * colors.length)];
    let b = colors[Math.floor(Math.random() * colors.length)];
    let c = colors[Math.floor(Math.random() * colors.length)];
    let d = colors[Math.floor(Math.random() * colors.length)];
    let e = colors[Math.floor(Math.random() * colors.length)];
    let bgColor = `linear-gradient(to right, ${a}, ${b}, ${c}, ${d}, ${e})`;
    document.body.style.background = bgColor;
}

document.body.addEventListener('click', cambiar_color_fondo);

function navegar_login() {
    let width = window.innerWidth / 2;
    let height = window.innerHeight / 2;
    let left = window.innerWidth / 4;
    let top = window.innerHeight / 4;
    window.open("login.html", "_blank", `width=${width}, height=${height}, left=${left}, top=${top}`);
}

