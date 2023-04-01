const parking_slot = require("../models/parking_slot");

exports.createParkingSlot = (req, res) => {

  const parkingData = req.body;
  const parking = new Parking_slot(parkingData);
  
  parking.save()
    .then(() => {
      res.send('parking slot created successfully');
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
  }

  exports.setParkingStatus = async (req,res) =>{

    const {status} = req.body;
    const updatesSlot = await parking_slot.findByIdAndUpdate(req.params.slotId,{status})
    res.status(200).send("Status updates successfully")
  }