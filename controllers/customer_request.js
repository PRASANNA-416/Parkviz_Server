const CustomerRequest = require("../models/customer_request");

exports.createCustomerRequest = (req, res) => {

    const customerRequestData = {
        ...req.body,
        userId: req.session.user._id// Add the user id to the customerRequestData object
      };
  const customer = new CustomerRequest(customerRequestData);
  
  customer.save()
    .then(() => {
      res.send('Customer Request created successfully');
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
  }

exports.updateCustomerRequests = async (req,res) => {

  const {services,note} = req.body;
  const updatesServices = await CustomerRequest.findByIdAndUpdate(req.params.customerId,{services,note})

  res.status(200).send("Status updated successfully")


}
