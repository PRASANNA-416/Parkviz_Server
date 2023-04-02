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
    if (req.session.user)
        return res.status(302).json({
            status: "success",
            data: null
        })
    const user = await User.findOne({email: req.body.email});
    if (!user || !user.comparePassword(req.body.password))
    return res.status(401).json({
        status: "error",
        "message": "Invalid credentials"
    })
    req.session.regenerate(err=>{
        req.session.user = user;
        req.session.save(err => {
            res.status(200).json({
                status: "success",
                data: null
            })
        });
    });

}

exports.logoutUser = async (req,res)=>{
    req.session.user = null;
    req.session.save();
    res.status(200).json({
        status: "success",
        data: null
    })
}

exports.passAuthenticated = async(req,res,next)=>{
    if (req.session?.user)
        return next();
    res.status(403).json({
        status: "error",
        message: "User not logged in"
    })
}