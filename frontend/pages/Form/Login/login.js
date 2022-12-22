const form = document.getElementById("form");
const btn = document.getElementById("ingresar");
const email = document.getElementById("email");
const password = document.getElementById("password");

btn.addEventListener("click", (event) => {
   if (password.value === "") {
      console.log("el campo contraseña es obligatorio");
      event.preventDefault();
      return false;
   } else if (email.value === "") {
      console.log("el campo de email es obligatorio");
      event.preventDefault();
      return false;
   }
});

// verificar si el usuario existe y retornar su información
function verifyUser(email, password) {
   fetch("http://localhost:3000/api/users", {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   }).then((response) => {
      response.json().then((data) => {
         console.log(data);
         let user = data.find((user) => user.email === email);
         if (user) {
            if (user.password === password) {
               console.log("usuario encontrado");
               localStorage.setItem("user", JSON.stringify(user));
               window.location.href = "../../ListaPokemon/listaPokemon.html";
            } else {
               alert("La contraseña es incorrecta");
            }
         } else {
            alert("El usuario no existe");
         }
      });
   });
}

form.addEventListener("submit", function (event) {
   event.preventDefault();
   verifyUser(email.value, password.value);
});
