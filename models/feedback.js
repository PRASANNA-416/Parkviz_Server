const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        integer: true,
        min: 1,
        max: 5
      },
    message: {
        type: String
    }

});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback