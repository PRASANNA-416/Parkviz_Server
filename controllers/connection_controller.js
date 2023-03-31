const mongoose = require('mongoose');

exports.connectToDb = async (connectionUrl)=>{
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    mongoose.connect(connectionUrl, options);
    
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Connected to MongoDB database!');
    });
    return db;
}