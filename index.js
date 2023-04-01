require('dotenv').config();
const url = `mongodb+srv://prasanna-8446:${process.env.MONGODB_PASSWORD}@parkviz.prxjsun.mongodb.net/?retryWrites=true&w=majority`; // Replace 'mydatabase' with your database name
const express = require('express');
const body_parser=require('body-parser')
const connectionController = require('./controllers/connection_controller')
const app = express();

const db = connectionController.connectToDb(url)
// parse application/x-www-form-urlencoded
app.use(body_parser.urlencoded({ extended: false }))

// parse application/json
app.use(body_parser.json())

const userRoutes = require('./routes/user');
const parkingRoutes = require('./routes/parking_slot');
const { connectToDb } = require('./controllers/connection_controller');

app.use('/users', userRoutes);
app.use('/parking_slots', parkingRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


