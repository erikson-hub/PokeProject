let id = "5f9f9f9f9f9f9f9f9f9f9f9f"; // obtener de la base de datos
let name = "John Doe"; // obtener de la base de datos
let email = "doe@gmail.com";
let username = "doe"; // obtener de la base de datos
let list = [
   "pikachu",
   "charmander",
   "bulbasaur",
   "squirtle",
   "eevee",
   "snorlax",
   "mew",
   "charizard",
   "pidgeotto",
   "gengar",
   "kadabra",
]; // obtener de la base de datos

// actualizar objeto user en el local storage
let user = JSON.parse(localStorage.getItem("user"));
user.id = id;
user.name = name;
user.email = email;
user.username = username;
user.list = list;
localStorage.setItem("user", JSON.stringify(user));
