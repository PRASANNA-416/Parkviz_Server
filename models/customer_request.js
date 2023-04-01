const mongoose = require("mongoose");
const customerRequestSchema = new mongoose.Schema({
    userId:{
        type: Number,
        required: true
    },
    carNumber: {
        type: String,
        required: true
    },
    services: [mongoose.Schema.Types.ObjectId],
    note: {
        type: String
    }
});

const CustomerRequest = mongoose.model('CustomerRequest', customerRequestSchema);
module.exports = CustomerRequest