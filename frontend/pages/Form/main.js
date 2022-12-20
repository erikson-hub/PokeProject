// Función para obtener lista de usuarios
function getUsers() {
    fetch("http://localhost:3000/api/users")
        .then(response => response.json())
        .then(data => console.log(data));
}

getUsers();

// Función para crear usuarios
function createUser(usuario, nombre, correo, contraseña) {
    fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            usuario, nombre, correo, contraseña
        }),
    })
        .then(response => response.json())
        .then(data => console.log(data));
}

