const express = require('express');
const router = express.Router();
const multer = require('multer')
const Houses = require('../models/house.model')



//REQUEST GET ALL THE HOUSES
router.get("/", (req,res)=>{
    Houses.find()
    .then((house)=> res.json(house))
    .catch((err)=> res.status(400).json(`Error: ${err}`));
});

//REQUEST ADD NEW ARTICLE
router.post("/add", (req,res)=>{
    const newHouse = new House({
        title: req.body.title,
        desc: req.body.desc,
        agent: req.body.qgent,
        price: req.body.price,
    });

    newHouse
        .save()
        .then(()=> res.json("New House added"))
        .catch((err)=> res.status(400).json(`Error: ${err}`));
})