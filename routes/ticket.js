const express = require('express');
const ticket = require("../models/ticket"); 
const ticketController = require("../controllers/ticket"); 
const router = express.Router();

router.post('/',ticketController.createTicket);

module.exports = router;
