// crear cards para cada pokemon
function crearCard(url, nombre){
    $("div.row.g-3").append(`<div class="col-12 col-sm-6">
    <div class="card mb-3 bg-white text-dark" style="max-width: 540px;">
       <div class="row g-0">
          <div class="col-xxl-4 d-flex justify-content-center">
             <img src="${url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-xxl-8">
             <div class="card-body">
                <div class="row justify-content-xxl-between">
                    <div class="col-xxl-3">
                        <div class="d-flex justify-content-center justify-content-xxl-start">
                            <h5 class="card-title mb-3">${nombre}</h5>
                        </div>
                    </div>
                    <div class="col-xxl-6">
                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn btn-warning">Añadir a favoritos</button>
                            <button type="button" class="btn btn-danger d-none">Quitar de favoritos</button>
                        </div>
                    </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>`)
};
async function obtenerPokemons(){
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    let data = await response.json();console.log(data);
    const ol = document.querySelector('#lista');
    data = data.results;
    for(const element in data){
        let pokemon = await fetch(data[element].url)
            .then(a => a.json())
        let url = pokemon.sprites.front_default;
        let nombre = pokemon.name;
        crearCard(url,nombre);
    };
};
obtenerPokemons();

// obtener datos del usuario desde el local storage
// const user = JSON.parse(localStorage.getItem("user"));
// console.log(user.name, user.email, user.username, user.list);

// let list = user.list;

// si se agregan nuevos pokemon agregar a new_list, guardar en la base de datos con los datos de user

// actualizar lista en el local storage
// user = JSON.parse(localStorage.getItem("user"));
// user.list = list;
// localStorage.setItem("user", JSON.stringify(user));
