require('dotenv').config()
const parkingSlot = require("../models/parking_slot")
const connectionController = require('../controllers/connection_controller')
const url = `mongodb+srv://prasanna-8446:${process.env.MONGODB_PASSWORD}@parkviz.prxjsun.mongodb.net/?retryWrites=true&w=majority`; 
const seedParkingSlots = async () => {
const db = await connectionController.connectToDb(url);
for(let i = 0; i < 25;i++){
  const parkingData = {
    number: i
  };
  const parking = new parkingSlot(parkingData);
  await parking.save()
    console.log(`created slot ${i}`);
  }
  await db.close();
}

seedParkingSlots()