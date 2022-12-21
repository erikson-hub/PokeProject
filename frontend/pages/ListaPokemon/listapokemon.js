// obtener datos del usuario desde el local storage
const user = JSON.parse(localStorage.getItem("user"));
console.log(user.id, user.id, user.name, user.email, user.username, user.list);

let list = user.list;
// si se agregan nuevos pokemon agregar a new_list, guardar en la base de datos con los datos de user

// actualizar lista en el local storage

// user = JSON.parse(localStorage.getItem('user'));
user.list = ["test", "tes2t"];
localStorage.setItem("user", JSON.stringify(user));
