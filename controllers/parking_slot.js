const ParkingSlot = require("../models/parking_slot");

exports.createParkingSlot = (req, res) => {

  const parkingData = req.body;
  const parking = new ParkingSlot(parkingData);
  
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
    const updatesSlot = await ParkingSlot.findByIdAndUpdate(req.params.slotId,{status})
    res.status(200).send("Status updated successfully")
  }

  exports.getParkingSlot = async (req,res) => {
    const parkingSlot = await ParkingSlot.findById(req.params.slotId);
    res.status(200).json({
      status : "success",
      data : parkingSlot
    })
  }