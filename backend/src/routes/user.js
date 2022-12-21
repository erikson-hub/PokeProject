const express = require('express');
const userSchema = require('../models/user');

const router = express.Router();

// Create user
router.post('/users', (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get all users
router.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get ONE user
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Update user
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { username, name, email, password, list } = req.body;

  userSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          username,
          name,
          email,
          password,
          list,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// DELETE user
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
