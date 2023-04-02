require('dotenv').config();
const express = require('express');
const body_parser=require('body-parser')
const session = require('express-session');
const connectionController = require('./controllers/connection')
const userRoutes = require('./routes/user');
const parkingRoutes = require('./routes/parking_slot');
const authRoutes = require('./routes/auth');
const MongoStore = require('connect-mongo');
const { passAuthenticated } = require('./controllers/auth');

const url = `mongodb+srv://prasanna-8446:${process.env.MONGODB_PASSWORD}@parkviz.prxjsun.mongodb.net/?retryWrites=true&w=majority`; // Replace 'mydatabase' with your database name
const connectionPromise = connectionController.connectToDb(url)
const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 30*24*60*60*1000 },
  store: MongoStore.create({
    client: connectionPromise.then(mongooseConnection => mongooseConnection.client)
  })
}))

//body parsing middlewares
app.use(body_parser.urlencoded({ extended: false }))
app.use(body_parser.json())


app.use('/auth', authRoutes);
app.use('/users',passAuthenticated, userRoutes);
app.use('/parking_slots',passAuthenticated, parkingRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


