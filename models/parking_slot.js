const mongoose = require("mongoose");
const parking_slotSchema = new mongoose.Schema({
    number:{
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },

});

const parking_slot = mongoose.model('ParkingSlot', parking_slotSchema);
module.exports = parking_slot