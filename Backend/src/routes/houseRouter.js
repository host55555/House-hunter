const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploads')
const House = require('../models/house.model');
const {addHouse,allHouses,getAllHouses} = require('../controllers/houseController')
const {protect} = require('../middlewares/protect')


//REQUEST GET ALL THE HOUSES by users
router.get('/allhouses',allHouses)
//get all houses by agents 
router.get('/myproperties', protect, getAllHouses)

//REQUEST ADD NEW HOUSE
router.post('/addhouse',protect,upload.array("images"), addHouse)
   

//REQUEST FIND HOUSE BY ID AND UPDATE


//DELETE HOUSE



module.exports = router;