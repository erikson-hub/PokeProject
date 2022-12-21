// obtener datos del nuevo usuario desde el formulario
let name = "John Doe";
let email = "doe@gmail.com";
let username = "doe";
let list = [];

// registrar usuario en la base de datos

// actualizar objeto user en el local storage
let user = JSON.parse(localStorage.getItem("user"));
user.id = id; // obtener de la base de datos despues de registrar
user.name = name;
user.email = email;
user.username = username;
user.list = list;
localStorage.setItem("user", JSON.stringify(user));
