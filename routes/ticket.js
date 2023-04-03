const express = require('express');
const ticket = require("../models/ticket"); 
const ticketController = require("../controllers/ticket"); 
const router = express.Router();

router.post('/',ticketController.createTicket);
router.get('/:ticketId',ticketController.setOutTime)
router.patch('/:ticketId',ticketController.updateTicket);

module.exports = router;
