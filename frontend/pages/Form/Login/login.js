const form = document.getElementById('form');
const btn = document.getElementById('ingresar');
const username = document.getElementById('username');
const password = document.getElementById('password');

function getUsers() {
  fetch('http://localhost:3000/api/users')
    .then((response) => response.json())
    .then((data) => console.log(data));
}
console.log(getUsers());

btn.addEventListener('click', (event) => {
  if (password.value === '') {
    console.log('el campo contraseña es obligatorio');
    event.preventDefault();
    return false;
  } else if (username.value === '') {
    console.log('el campo de usuario es obligatorio');
    event.preventDefault();
    return false;
  } else if (username.value.length > 30) {
    console.log('El nombre del usuario es demasiado largo');
    event.preventDefault();
    return false;
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (password.value === 'un password en la base de datos &&') {
  }
});
let id = '5f9f9f9f9f9f9f9f9f9f9f9f'; // obtener de la base de datos
let name = 'John Doe'; // obtener de la base de datos
let email = 'doe@gmail.com';
// let username = 'doe'; // obtener de la base de datos
let list = [
  'pikachu',
  'charmander',
  'bulbasaur',
  'squirtle',
  'eevee',
  'snorlax',
  'mew',
  'charizard',
  'pidgeotto',
  'gengar',
  'kadabra',
]; // obtener de la base de datos

// actualizar objeto user en el local storage
/* Getting the user object from the local storage. */
let user = JSON.parse(localStorage.getItem('user'));
user.id = id;
user.name = name;
user.email = email;
user.username = username;
user.list = list;
localStorage.setItem('user', JSON.stringify(user));
