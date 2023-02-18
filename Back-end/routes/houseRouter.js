const express = require('express');
const router = express.Router();
const multer = require('multer')
const Houses = require('../models/house.model')

//multer
const storage = multer.diskStorage({
    destination:(req, file, callback) =>{
        callback(null, './public/uploads/');
    },
    filename: (req, file, callback)=>{
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});

//REQUEST GET ALL THE HOUSES
router.get("/", (req,res)=>{
    Houses.find()
    .then((house)=> res.json(house))
    .catch((err)=> res.status(400).json(`Error: ${err}`));
});

//REQUEST ADD NEW ARTICLE
router.post("/addhouse",upload.single("houseImage"),(req,res)=>{
    const house = new Houses({
        owner: req.body.owner,
        desc: req.body.desc,
        agent: req.body.agent,
        price: req.body.price,
        deposit: req.body.deposit,
        quantity: req.body.quantity,
        houseImage: req.file.originalname,
    });

    house
        .save()
        .then(()=> res.status(200).json("New House added"))
        .catch((err)=> res.status(400).json(`Error: ${err}`));
})

//REQUEST FIND HOUSE BY ID AND UPDATE

router.put('/update/:id', upload.single("houseImage"),(req,res)=>{
    Houses.findById(req.params,id)
    .then((house)=>{
        house.owner = req.body.owner;
        house.desc = req.body.desc;
        house.agent =req.body.agent;
        house.price = req.body.price;
       house.houseImage =req.file.originalname;
        
        house
            .save()
            .then(()=> res.json("House Details Updates"))
            .catch((err)=> res.status(400).json(`Error: ${err}`));
    })
})

module.exports = router;