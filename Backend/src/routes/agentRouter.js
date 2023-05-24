const express = require('express')
const router = express.Router()
const {adminProtect} = require('../middlewares/protect')
 const {registerAgent, createAccount, loginAgent, resetPassword,verifyResetPassword} = require('../controllers/agentController')

 //agent creating an account by admin
 router.post('/register',adminProtect, registerAgent)
 //agent credentials by agent
 router.post('/createAccount',createAccount)
 //agent login
 router.post('/login', loginAgent)
 //sending otpcode
 router.post('/reset-password', resetPassword)
 //verify otp
 router.post('/verify-otp', verifyResetPassword)
 //get agent
 //router.get('/me', getAgent)


 module.exports = router   
