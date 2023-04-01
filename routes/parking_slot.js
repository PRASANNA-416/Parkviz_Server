const express = require('express');
const Parking_slot = require("../models/parking_slot"); 
const parkingSlotController = require("../controllers/parking_slot")
const router = express.Router();

router.get('/', (req, res) => {
    // Handle GET request for /users route
  });
router.get('/:slotId', (req, res) => {
    // Handle GET request for /users route
  });
  
router.post('/', parkingSlotController.createParkingSlot);
  
  router.patch('/:slotId', parkingSlotController.setParkingStatus);
  
  router.delete('/:userId', (req, res) => {
    // Handle DELETE request for /users/:userId route
  });

module.exports = router;