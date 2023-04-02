const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "Customer"
    },

});

userSchema.pre('save', async function(next){
    if (!this.isModified('password')) {
        return next();
      }
    this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(10));
    next();
})

userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
      const isMatch = await bcrypt.compare(candidatePassword, this.password);
      return isMatch;
    } catch (error) {
      return false;
    }
  };

const User = mongoose.model('User', userSchema);

module.exports = User