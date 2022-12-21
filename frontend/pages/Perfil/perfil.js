// obtener datos del usuario desde el local storage
const user = JSON.parse(localStorage.getItem("user"));
console.log(user.id, user.name, user.email, user.username, user.list);

// mostrar datos en el formulario
let name = user.name;
let email = user.email;
let username = user.username;
//let password = "";
//let new_password = "";

// si se modifican los datos, guardar en la base de datos con los datos de user

// actualizar objeto user en el local storage
user.name = name;
user.email = email;
user.username = username;
localStorage.setItem("user", JSON.stringify(user));
