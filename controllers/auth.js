const User = require('../models/user');

exports.registerUser = async (req,res) => {
    if (req.body?.role==='admin')
        res.status(400).json({
            status: "error",
            message: "cannot register as admin"
        })
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            status: "success",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error
        })
    }
}

exports.loginUser = async (req,res) => {
}