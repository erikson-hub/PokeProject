// obtener datos del usuario desde el local storage



const user = JSON.parse(localStorage.getItem("user"));
console.log(user._id, user.name, user.email, user.username, user.list);

/* console.log(user._id)
console.log(user.email)
console.log(user.name)
console.log(user.username)
 */
const id = user._id


function deletedUser(id) {
    fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'DELETE'
    })
        .then((response) => response.json())
        .then((data) => console.log(data));

}

/* function deletedAcc(id) {

    console.log(id)
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
    }).then(

        function (isConfirm) {
            if (isConfirm) {
                swal("Deleted!", "Su cuenta ha sido borrada con éxito.", "success");
                deletedUser(id)
                window.location.href = "../../index.html"
            } else {
                swal("Eliminación cancelada", "Su cuenta no ha sido borrada :)", "error");
            }
            
        });
        
    } */

const deleteButton = document.getElementById('delete-btn')

function deletedAcc(id) {

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
    }).then(

        function (isConfirm) {
            if (isConfirm) {
                swal("Deleted!", "Su cuenta ha sido borrada con éxito.", "success");
                deletedUser(id)
                window.location.href = "../../index.html"
            } else {
                swal("Eliminación cancelada", "Su cuenta no ha sido borrada :)", "error");
            }

        });
}


deleteButton.addEventListener('click', () => {
    deletedAcc(id)
})



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
localStorage.setItem("user", JSON.stringify(user)); */







function llenarTabla() {
    let body = document.querySelector('#tabla tbody')
    tbody.innerHTML = '';

    let bucleInfo = user.length

    for (let i = 0; i < bucleInfo; i++) {

        let fila = document.createElement('tr');

        let celdaUname = document.childElement('td');
        let celdaEmail = document.childElement('td');
        let celdaName = document.childElement('td');

        let nodeUname = document.createElement(user.username[i]);
        let nodeEmail = document.createElement(user.email[i]);
        let nodeName = document.createElement(user.name[i]);

        fila.appendChild(celdaName.appendChild(nodeName));
        fila.appendChild(celdaEmail.appendChild(nodeEmail));
        fila.appendChild(celdaUname.appendChild(nodeUname));

        tbody.appendChild(fila);
    }

}

llenarTabla();
