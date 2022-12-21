const user = JSON.parse(localStorage.getItem("user"));
console.log(user.id, user.name, user.email, user.username, user.list);

let list = user.list;

list = [
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

function updateUser(id, name, email, username, list) {
   fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
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

function createCard(data, container) {
   const card = document.createElement("div");
   card.classList.add("card");
   card.innerHTML = `
      <p class="pokemon-name">${data.name}</p>
      <img class="card-img" src="${data.sprites.front_default}" alt="${
      data.name
   }">
      <p class="category">Stats</p>
      <hr>
      <div class="stats-container">
         <div class="stats">
            <p class="stat">Type:</p>
            <p class="stat">${data.types[0].type.name}</p>
         </div>
         <div class=" stats">
            <p class="stat">Attack:</p>
            <p class="stat">${data.stats[1].base_stat}</p>
         </div>
         <div class="stats">
            <p class="stat">Defense:</p>
            <p class="stat">${data.stats[2].base_stat}</p>
         </div>
         <div class="stats">
            <p class="stat">Speed:</p>
            <p class="stat">${data.stats[0].base_stat}</p>
         </div>
         <div class="stats">
            <p class="stat">HP:</p>
            <p class="stat">${data.stats[5].base_stat}</p>
         </div>
      </div>
      <p class="category">Abilities</p>
      <hr>
      <div class="abilities-container">
         <ul>
            ${data.abilities
               .map(
                  (ability) =>
                     `<li class="ability">${ability.ability.name}</li>`
               )
               .join("")}
         </ul>
      </div>
      <button class="btn" id='${data.name}'>Remove</button>
   `;
   container.appendChild(card);
}

// buscar pokemon por nombre
const searchPokemon = async (pokemon, container) => {
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
   const data = await response.json();
   if (data) {
      createCard(data, container);
   }
};

const container = document.querySelector(".container");
for (let pokemon of list) {
   await searchPokemon(pokemon, container);
}

// eliminar pokemon de la lista de favoritos y la base de datos
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
   btn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      const pokemon = e.target.id;
      list = list.filter((item) => item !== pokemon);
   });
});

window.addEventListener("beforeunload", () => {
   user.list = list;
   localStorage.setItem("user", JSON.stringify(user));
   updateUser(user.id, user.name, user.email, user.username, user.list);
});
