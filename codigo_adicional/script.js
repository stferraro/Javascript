const users = ['John', 'Jane', 'Peter', 'Mark'];
const contraseñas = ['1224', '1234', '1134', '1034'];

prompt(`Bienvenido al sistema de autenticación de usuarios. Por favor, inicie sesión.`);

let username = prompt(`Por favor, ingrese su nombre de usuario`);
let password = prompt(`Por favor, ingrese su contraseña`);

users.push(username);
contraseñas.push(password);

for(let i = 0; i < users.length; i++){
    console.log(`el usuario ${users[i]} tiene la contraseña ${contraseñas[i]}`);
}