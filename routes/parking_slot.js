const express = require('express');
const parkingSlotController = require("../controllers/parking_slot")
const router = express.Router();

router.get('/:slotId', parkingSlotController.getParkingSlot);
router.post('/', parkingSlotController.createParkingSlot);
router.patch('/:slotId', parkingSlotController.setParkingStatus);

module.exports = router;