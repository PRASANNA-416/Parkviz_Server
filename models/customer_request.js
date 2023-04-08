const mongoose = require("mongoose");
const ParkingSlot = require("./parking_slot");
const Ticket = require("./ticket");
const customerRequestSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    carNumber: {
        type: String,
        required: true
    },
    services: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Service'
        }
    ],
    note: {
        type: String
    },
    status: {
        type : Boolean,
        default : false
    }
});

customerRequestSchema.pre('save', async function(next){
    const parkingSlot = await ParkingSlot.findOne({status: false});
    if (parkingSlot && this.isNew)
    {
        await Ticket.create({
            userId : this.userId,
            carNo : this.carNumber,
            slotId : parkingSlot._id
        })
        this.status = true;
    }
    next();

})

const CustomerRequest = mongoose.model('CustomerRequest', customerRequestSchema);
module.exports = CustomerRequest