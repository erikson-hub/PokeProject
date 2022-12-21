const form = document.getElementById('form');
const btn = document.getElementById('ingresar');
const email = document.getElementById('email');
const password = document.getElementById('password');

// function getUsers() {
//   fetch('http://localhost:3000/api/users')
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }
// console.log(getUsers());

btn.addEventListener('click', (event) => {
  if (password.value === '') {
    console.log('el campo contraseña es obligatorio');
    event.preventDefault();
    return false;
  } else if (email.value === '') {
    console.log('el campo de usuario es obligatorio');
    event.preventDefault();
    return false;
  } else if (email.value.length > 30) {
    console.log('El nombre del usuario es demasiado largo');
    event.preventDefault();
    return false;
  }
});
// let user = null;
form.addEventListener('submit', function (event) {
  event.preventDefault();
  function verifyUser(email, password) {
    fetch('http://localhost:3000/api/users')
      .then((response) => response.json())
      .then((data) => {
        let user = data.find((user) => user.email === email);
        console.log(user);
        console.log(user.email, user.password, password);
        if (user.password === password) {
          console.log('test');
          console.log(user);
          return user;
        }
      });
  }

  const user = verifyUser(email.value, password.value);
  console.log(user);
  if (user) {
    // actualizar objeto user en el local storage
    user.id = id;
    user.name = name;
    user.email = email;
    user.email = email;
    user.list = list;
    localStorage.setItem('user', JSON.stringify(user));
    //
    windows.location.href = '../../pages/ListaPokemons/listaPokemons.html';
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});

// let id = '5f9f9f9f9f9f9f9f9f9f9f9f'; // obtener de la base de datos
// let name = 'John Doe'; // obtener de la base de datos
// let email = 'doe@gmail.com';
// // let email = 'doe'; // obtener de la base de datos
// let list = [
//   'pikachu',
//   'charmander',
//   'bulbasaur',
//   'squirtle',
//   'eevee',
//   'snorlax',
//   'mew',
//   'charizard',
//   'pidgeotto',
//   'gengar',
//   'kadabra',
// ]; // obtener de la base de datos

// // actualizar objeto user en el local storage
// /* Getting the user object from the local storage. */
// let user = JSON.parse(localStorage.getItem('user'));
// user.id = id;
// user.name = name;
// user.email = email;
// user.email = email;
// user.list = list;
// localStorage.setItem('user', JSON.stringify(user));
