exports.createParkingSlot = (req, res) => {
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
  }