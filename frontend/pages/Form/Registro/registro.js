const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

function createUser() {
  const fullnameVal = fullname.value.trim();
  const emailVal = email.value.trim();
  const usernameVal = username.value.trim();
  const passwordVal = password.value.trim();
  fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: usernameVal,
      name: fullnameVal,
      email: emailVal,
      password: passwordVal,
      list: '[]',
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // actualizar objeto user en el local storage
      let user = JSON.parse(localStorage.getItem('user'));
      user.id = data._id; // obtener de la base de datos despues de registrar
      user.name = data.name;
      user.email = data.email;
      user.username = data.username;
      user.list = data.list;
      localStorage.setItem('user', JSON.stringify(user));
      console.log(user);
    })
    .catch((err) => alert('Ocurrió un problema en el servidor'));
}

const sendData = (usernameVal, sRate, Count) => {
  if (sRate === Count) {
    swal(
      'Bienvenido(a) ' + usernameVal,
      'TU REGISTRO FUE EXITOSO',
      'success'
    ).then(function () {
      window.location.href = '../../ListaPokemon/listapokemon.html';
    });
    // if (confirm('Are you sure you want to')) {
    //   windows.location.href = '../../ListaPokemon/listapokemon.html';
    // }

    // redirigir
  }
};
const SuccessMsg = (usernameVal) => {
  let formContr = document.getElementsByClassName('form-control');
  var Count = formContr.length - 1;
  for (var i = 0; i < formContr.length; i++) {
    if (formContr[i].className === 'form-control success') {
      var sRate = 0 + i;
      console.log(sRate);
      sendData(usernameVal, sRate, Count);
    } else {
      return false;
    }
  }
};
const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf('@');
  if (atSymbol < 1) return false;
  var dot = emailVal.lastIndexOf('.');
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

function Validacion() {
  const fullnameVal = fullname.value.trim();
  const emailVal = email.value.trim();
  const usernameVal = username.value.trim();
  const passwordVal = password.value.trim();
  const confirmPasswordVal = confirmPassword.value.trim();

  //Nombre Completo

  if (fullnameVal === '') {
    setErrorMsg(fullname, 'Este campo no puede estar vacio');
  } else if (fullname.length <= 5) {
    setErrorMsg(fullname, 'Ingresar mínimo 3 caracteres');
  } else {
    setSuccessMsg(fullname);
  }

  //Email
  if (emailVal === '') {
    setErrorMsg(email, 'Este campo no puede estar vacio');
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, 'Email es incorrecto');
  } else {
    setSuccessMsg(email);
  }

  //Nombre de Usuario
  if (usernameVal === '') {
    setErrorMsg(username, 'Este campo no puede estar vacio');
  } else if (usernameVal.length <= 2) {
    setErrorMsg(username, 'Ingresar mínimo 3 caracteres');
  } else {
    setSuccessMsg(username);
  }

  //Contraseña
  if (passwordVal === '') {
    setErrorMsg(password, 'Este campo de password no puede estar vacio');
  } else if (passwordVal.length <= 7) {
    setErrorMsg(password, 'Ingresar mínimo 8 caracteres');
  } else {
    setSuccessMsg(password);
  }

  //Confirmación de Contraseña
  if (confirmPasswordVal === '') {
    setErrorMsg(
      confirmPassword,
      'El campo de confirmación no puede estar vacio'
    );
  } else if (passwordVal != confirmPasswordVal) {
    setErrorMsg(confirmPassword, 'Los password tienen que ser iguales!');
  } else {
    setSuccessMsg(confirmPassword);
  }
  SuccessMsg(usernameVal);
}

function setErrorMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  Validacion();
  createUser();
  form.action = '../../ListaPokemon/listapokemon.html';
});
