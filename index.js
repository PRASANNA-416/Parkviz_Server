require('dotenv').config();
const mongoose = require('mongoose');
const url = `mongodb+srv://prasanna-8446:${process.env.MONGODB_PASSWORD}@parkviz.prxjsun.mongodb.net/?retryWrites=true&w=majority`; // Replace 'mydatabase' with your database name
const express = require('express');
const app = express();

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(url, options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB database!');
});


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
