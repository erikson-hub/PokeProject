// obtener datos del usuario desde el local storage



const user = JSON.parse(localStorage.getItem("user"));
console.log(user._id, user.name, user.email, user.username, user.list);

console.log(user._id)
console.log(user.email)
console.log(user.name)
console.log(user.username)


function deleteAcc(id) {

    swal({
        title: "Desea continuar?",
        text: "Está seguro de eliminar su perfil? Una vez los datos sea borados estos no son recuperables",
        type: "Advertencia",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Si, deseo eliminar mi cuenta!",
        cancelButtonText: "No, no deseo borar mi cuenta!",
        closeOnConfirm: false,
        closeOnCancel: false
    },
        function (isConfirm) {
            if (isConfirm) {
                swal("Deleted!", "Su cuenta ha sido borrada con éxito.", "success");
            } else {
                swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
        });
}

// mostrar datos en el formulario
/* let name = user.name;
let email = user.email;
let username = user.username; */
//let password = "";
//let new_password = "";

// si se modifican los datos, guardar en la base de datos con los datos de user

// actualizar objeto user en el local storage
/* user.name = name;
user.email = email;
user.username = username;
localStorage.setItem("user", JSON.stringify(user));

function deleteUser(id) {
    fetch(`http://localhost:3000/api/users/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'aplication/json'
        },

        body: JSON.stringify({
            name: name,
            email: email,
            username: username,
            list: list,
        }),
    })
        .then((reponse) => reponse.json())
        .then((data) => {
            console.log(data);
        });
}
 */
/* function llenarTabla() {
    let body = document.querySelector('#tabla tbody')
    tbody.innerHTML = '';

    let infoUser = JSON.parse(localStorage.getItem("user"));
    let bucleInfo = infoUser.length

    for (let i = 0; i < bucleInfo; i++) {

        let fila = document.createElement('tr');

        let celdaUname = document.childElement('td');
        let celdaEmail = document.childElement('td');
        let celdaName = document.childElement('td');

        let nodeUname = document.createElement(infoUser[i]);
        let nodeEmail = document.createElement(infoUser[i]);
        let nodeName = document.createElement(infoUser[i]);

        fila.appendChild(celdaName.appendChild(nodeName));
        fila.appendChild(celdaEmail.appendChild(nodeEmail));
        fila.appendChild(celdaUname.appendChild(nodeUname));

        tbody.appendChild(fila);
    }

} */
