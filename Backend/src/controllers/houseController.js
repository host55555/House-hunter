const express = require('express')
const upload = require('../middlewares/uploads')
const { uploadToCloudinary, removeFromCloudinary } = require('../services/cloudinary')

const asyncHandler = require('express-async-handler')

const House = require('../models/house.model')
const User = require('../models/userModel')

//desc Get Houses 
//@route GET /api/houses
//@access Public 
//fetching houses from the clients
const allHouses = asyncHandler(async (req, res) => {
    const houses = await House.find()

    res.status(200).json(houses)
})
//desc Get Houses 
//@route GET /api/houses
//@access Public 
//fetching houses by agents
const getAllHouses = asyncHandler (async (req, res)=>{
    const houses = await House.find({user: req.user.id})
    res.status(201).json(houses)
})


//desc Set Houses
//@route POST /api/assets
//@access Private
const addHouse = asyncHandler(  async(req, res) => {
    const { owner, desc, amount, quantity, category, location } = req.body     

    //check if fields are epmty
    if (!owner || !desc || !amount || !quantity || !category || !location) {
        res.status(400)
        throw new Error("All fields are required");

    }
    try {
        //upload Image to cloudinary
        const data = await uploadToCloudinary(req.file.path, "test-one")
        //save Image url  to the database
        const imageUrl = data.url;
        const house = new House({
            owner,
            desc,        
            amount,
            quantity,
            category,
            location,    
            image: imageUrl,
            user: req.user.id 
           
        })

        await house.save();
        res.status(200).json(house)
    
        
    }catch (error) {
        res.status(400).send(error);
    }
})



module.exports = {
    addHouse,
    allHouses,
    getAllHouses
}