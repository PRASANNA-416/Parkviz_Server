const Ticket = require('../models/ticket');

exports.createTicket = async (req,res)=>{
    const ticketData = {...req.body};
    ticketData.userId = req.session.user._id;
    const ticket = await Ticket.create(ticketData);
    res.status(201).json({
        status: "success",
        data: ticket
    })
}

exports.updateTicket = async (req,res) => {
    const {paymentStatus} = req.body;
    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.ticketId,{paymentStatus},{new: true})
    res.status(200).json({
        status: "success",
        data : updatedTicket
        })
}

exports.setOutTime = async(req,res) => {
    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.ticketId,{outTime: Date.now()},{new: true});
    res.status(200).json({
        status: "success",
        data : updatedTicket
        })
}