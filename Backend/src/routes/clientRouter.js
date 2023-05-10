const express = require('express')
const router = express.Router()
const {Book, getClients} = require('../controllers/clientControllers')

//client booking route
router.post('/booking',Book)
//fetch clients route
router.get('/all', getClients)


module.exports = router      