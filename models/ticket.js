const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    carNo: {
        type: String,
        required: true,
    },
    slotId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'ParkingSlot'
    },
    inTime:{
        type: Date,
        default: Date.now()
    },
    outTime:{
        type: Date
    },
    paymentStatus:{
        type: Boolean,
        default: false
    },

});

const ticket = mongoose.model('Ticket', ticketSchema);
module.exports = ticket