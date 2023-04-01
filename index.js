require('dotenv').config();
const express = require('express');
const body_parser=require('body-parser')
const connectionController = require('./controllers/connection_controller')
const userRoutes = require('./routes/user');
const parkingRoutes = require('./routes/parking_slot');

const url = `mongodb+srv://prasanna-8446:${process.env.MONGODB_PASSWORD}@parkviz.prxjsun.mongodb.net/?retryWrites=true&w=majority`; // Replace 'mydatabase' with your database name
const db = connectionController.connectToDb(url)

const app = express();

//body parsing middlewares
app.use(body_parser.urlencoded({ extended: false }))
app.use(body_parser.json())


app.use('/users', userRoutes);
app.use('/parking_slots', parkingRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


