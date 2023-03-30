const express = require('express');
const ticket = require("../models/ticket"); 
const router = express.Router();
router.get('/', (req, res) => {
    // Handle GET request for /users route
  });
  
  router.post('/', (req, res) => {
    // Handle POST request for /users route
    const userData = req.body;
  const user = new User(userData);
  
  user.save()
    .then(() => {
      res.send('User created successfully');
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
  });
  
  router.put('/:userId', (req, res) => {
    // Handle PUT request for /users/:userId route
  });
  
  router.delete('/:userId', (req, res) => {
    // Handle DELETE request for /users/:userId route
  });

  router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hash });
    await user.save();
    res.send('User created successfully');
  });

  
  module.exports = router;
