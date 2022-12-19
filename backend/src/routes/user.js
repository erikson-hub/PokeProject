const express = require('express');
const clientSchema = require('../models/user');

const router = express.Router();

// Create client
router.post('/users', (req, res) => {
  const client = clientSchema(req.body);
  client
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get all users
router.get('/users', (req, res) => {
  clientSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get ONE user
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  clientSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Update user
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { usuario, nombre, correo, contraseña } = req.body;

  clientSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          usuario,
          nombre,
          correo,
          contraseña,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// DELETE user
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  clientSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
