// obtener datos del usuario desde el local storage
const user = JSON.parse(localStorage.getItem('user'));
console.log(user._id, user.name, user.email, user.username, user.list);

// no borrar
var list = user.list;

function updateUser(id, name, email, username, list) {
  fetch(`http://localhost:3000/api/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      username: username,
      list: list,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

// crear cards para cada pokemon
function crearCard(url, nombre) {
  $('div.row.g-3').append(`<div class="col-12 col-sm-6">
    <div class="card mb-3 bg-white text-dark" style="max-width: 540px;" id="${nombre}">
       <div class="row g-0">
          <div class="col-xxl-4 d-flex justify-content-center">
             <img src="${url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-xxl-8">
             <div class="card-body">
                <div class="row justify-content-xxl-between">
                    <div class="col-xxl-3">
                        <div class="d-flex justify-content-center justify-content-xxl-start">
                            <h6 class="card-title mb-3 pokemonNombre">${nombre}</h6>
                        </div>
                    </div>
                    <div class="col-xxl-7">
                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn btn-warning anadirFav" data-bs-toggle="modal" data-bs-target="#anadirModal" id="botonAnadir">Añadir a favoritos</button>
                            <button type="button" class="btn btn-danger removerFav" data-bs-toggle="modal" data-bs-target="#removerModal" style="display:none;" id="botonRemover">Remover de favoritos</button>
                        </div>
                    </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>`);
}

function anadirAFavoritos(e) {
  console.log('Añadir a favoritos ha sido pulsado');
  divActual = $(e.target).closest('div.card-body');
  const pokemon = $(e.target)
    .closest('div.card-body')
    .find('.pokemonNombre')
    .text();
  console.log(pokemon + ' ha sido seleccionado para ser AÑADIDO');
  pokemonActual = pokemon;
  const texto = '¿Desea añadir a ' + pokemon + ' a favoritos?';
  modificarModal('anadirModal', texto);
}

function removerDeFavoritos(e) {
  console.log('Remover de favoritos ha sido pulsado');
  divActual = $(e.target).closest('div.card-body');
  const pokemon = $(e.target)
    .closest('div.card-body')
    .find('.pokemonNombre')
    .text();
  console.log(pokemon + ' ha sido seleccionado para ser REMOVIDO');
  pokemonActual = pokemon;
  const texto = '¿Desea remover a ' + pokemon + ' de sus favoritos?';
  modificarModal('removerModal', texto);
}

function modificarModal(modal, texto) {
  console.log('Texto de modal modificado');
  $('#' + modal + ' .modal-body').text(texto);
}

function anadirAFavoritosModal(e) {
  list.push(pokemonActual);
  user.list = list;
  localStorage.setItem('user', JSON.stringify(user));
  updateUser(user._id, user.name, user.email, user.username, user.list);
  console.log(
    '----------------------------------------------- Pokemones Favoritos -----------------------------------------------'
  );
  console.table(list);
  let divPokemon = divActual.closest('.card');
  divPokemon.removeClass('bg-white');
  divPokemon.removeClass('text-dark');
  divPokemon.addClass('bg-dark');
  divPokemon.addClass('text-white');
  divActual.find('.anadirFav').hide();
  divActual.find('.removerFav').show();
}

function removerDeFavoritosModal(e) {
  let pos = user.list.indexOf(`${pokemonActual}`);
  console.log('INDEX DEL POKEMON A REMOVER: ' + pos);
  user.list.splice(pos, 1);
  console.log(
    '----------------------------------------------- Pokemones Favoritos -----------------------------------------------'
  );
  console.table(list);
  let divPokemon = divActual.closest('.card');
  divPokemon.removeClass('bg-dark');
  divPokemon.removeClass('text-white');
  divPokemon.addClass('bg-white');
  divPokemon.addClass('text-dark');

  divActual.find('.anadirFav').show();
  divActual.find('.removerFav').hide();
}

async function obtenerPokemons() {
  let response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
  );
  let data = await response.json();
  data = data.results;
  for (const element in data) {
    let pokemon = await fetch(data[element].url).then((a) => a.json());
    let url = pokemon.sprites.front_default;
    let nombre = pokemon.name;
    crearCard(url, nombre);
  }
  favoritosGuardados(user);
}
obtenerPokemons();

$(document).ready(function () {
  //funciones para cambio de texto en modal
  $('body').on('click', '.anadirFav', anadirAFavoritos);
  $('body').on('click', '.removerFav', removerDeFavoritos);

  //funcion de guardar favorito
  $('#botonAnadir').on('click', anadirAFavoritosModal);
  $('#botonRemover').on('click', removerDeFavoritosModal);
});

function favoritosGuardados(a) {
  a.list.forEach((pokemon) => {
    console.log(pokemon + ' esta en favoritos');
    let div = $(`body #${pokemon}`);
    div.removeClass('bg-white');
    div.removeClass('text-dark');
    div.addClass('bg-dark');
    div.addClass('text-white');
    div.find('.anadirFav').hide();
    div.find('.removerFav').show();
  });
}
