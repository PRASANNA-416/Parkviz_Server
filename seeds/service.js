require('dotenv').config()
const fs = require("fs")
const Service = require("../models/service")
const connectionController = require('../controllers/connection_controller')
const url = `mongodb+srv://prasanna-8446:${process.env.MONGODB_PASSWORD}@parkviz.prxjsun.mongodb.net/?retryWrites=true&w=majority`;

const seedServices = async () => {
const db = await connectionController.connectToDb(url);
  const serviceData = fs.readFileSync(`${__dirname}/../seed_data/service.json`,{encoding:"utf-8"})
  const service = await Service.create(JSON.parse(serviceData));
    console.log(`created services`);
  await db.close();
}

seedServices()