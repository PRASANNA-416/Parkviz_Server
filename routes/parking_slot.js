const express = require('express');
const Parking_slot = require("../models/parking_slot"); 
const router = express.Router();
router.get('/', (req, res) => {
    // Handle GET request for /users route
  });
  
router.post('/', (req, res) => {
    // Handle POST request for /users route
  const parkingData = req.body;
  const parking = new Parking_slot(parkingData);
  
  parking.save()
    .then(() => {
      res.send('parking slot created successfully');
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

  