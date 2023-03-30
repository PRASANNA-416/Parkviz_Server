const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId, ref:'User',
        required: true,
    },
    car_reg_no: {
        type: String,
        required: true,
    },
    slot_Id: {
        type: String,
        required: true
    },
    in_time:{
        type: Date,
        required: true
    },
    out_time:{
        type: Date,
        required: true
    },
    payment_status:{
        type: Boolean,
        default: false
    },

});

const ticket = mongoose.model('User', ticketSchema);
module.exports = ticket