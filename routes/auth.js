const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

router.post('/signup',authController.registerUser);
router.post('/login',authController.loginUser);
router.get('/logout',authController.logoutUser  )

module.exports = router;
