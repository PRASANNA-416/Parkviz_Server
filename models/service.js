const mongoose = require("mongoose");
const serviceSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

});

const service = mongoose.model('Service', serviceSchema);
module.exports = service