const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploads')
const House = require('../models/house.model');
const {addHouse,allHouses,getAllHouses,
    houseId,houseUpdate,deleteHouse, getHouseByCategory} = require('../controllers/houseController')
const {protect} = require('../middlewares/protect')


//REQUEST GET ALL THE HOUSES by users
router.get('/allhouses',allHouses)
//get all houses by agents 
router.get('/myproperties', protect, getAllHouses)
//REQUEST ADD NEW HOUSE
router.post('/addhouse',protect,upload.array("images"), addHouse)
//REQUEST FIND HOUSE BY ID 
router.get('/house/:id',houseId)
//find house by id and update
router.put('/update/house/:id',protect,houseUpdate)
//find house by id and delete
router.delete('/delete/house/:id',protect, deleteHouse)
//filter houses by category
router.get('/houses/category/query', getHouseByCategory)




module.exports = router;