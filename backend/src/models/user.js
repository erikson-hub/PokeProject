const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  usuario: {
    type: 'string',
    required: true,
  },
  nombre: {
    type: 'string',
    required: true,
  },
  correo: {
    type: 'string',
    required: true,
  },
  contraseña: {
    type: 'string',
    required: true,
  },
});
module.exports = mongoose.model('User', userSchema);
