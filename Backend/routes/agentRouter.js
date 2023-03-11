const express = require('express')
const router = express.Router()
const Agent = require('../models/agentModel')
 const {registerAgent, createAccount, loginAgent, getAgent} = require('../controllers/agentController')

 //agent creating an account by admin
 router.post('/register',registerAgent)
 //agent credentials by agent
 router.post('/createAccount',createAccount)
 //agent login
 router.post('/login', loginAgent)
 //get agent
 //router.get('/me', getAgent)


 module.exports = router   
