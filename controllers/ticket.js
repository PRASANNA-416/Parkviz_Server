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