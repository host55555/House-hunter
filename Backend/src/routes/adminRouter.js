const express = require('express')
const router = express.Router()

const {adminSignUp, adminLogin} = require("../controllers/adminController")

//admin sign up
router.post('/signup', adminSignUp)
//admin login
router.post('/login',adminLogin)


module.exports = router