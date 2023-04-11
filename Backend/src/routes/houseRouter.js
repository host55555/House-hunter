const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploads')
const Houses = require('../models/house.model');
const {addHouse} = require('../controllers/houseController')



//REQUEST GET ALL THE HOUSES
router.get("/allhouses", (req,res)=>{
    Houses.find()
    .then((house)=> res.status(200).json(house))
    .catch((err)=> res.status(401).json(`Error: ${err}`));
});

//REQUEST ADD NEW HOUSE
router.post('/addhouse',upload.single("image"), addHouse)
   

//REQUEST FIND HOUSE BY ID AND UPDATE


//DELETE HOUSE



module.exports = router;