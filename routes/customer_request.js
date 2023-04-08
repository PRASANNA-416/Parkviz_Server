const express = require('express');
const customerRequest = require("../models/customer_request"); 
const ServiceController = require("../controllers/customer_request")
const router = express.Router();

router.get('/', (req, res) => {
    // Handle GET request for /users route
  });
router.get('/:slotId', (req, res) => {
    // Handle GET request for /users route
  });
  
router.post('/', ServiceController.createCustomerRequest);
  
//   router.patch('/:slotId', parkingSlotController.setParkingStatus);
  
  router.delete('/:userId', (req, res) => {
    // Handle DELETE request for /users/:userId route
  });
  router.patch('/:customerId', ServiceController.updateCustomerRequests);
module.exports = router;