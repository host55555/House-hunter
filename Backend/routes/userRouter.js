const express = require('express');
const { findOneAndDelete } = require('../models/user.model');
const router = express.Router();
const Users = require('../models/user.model');

//get user
router.get('/allusers',(req,res)=>{
    Users.find()
    .then((user)=>res.status(200).json(user))
    .catch((err)=> res.status(400).json(err))
})

//adduser
router.post('/adduser',(req,res)=>{

    const agency = req.body.agency;
    const location = req.body.location;
    const address = req.body.location;
    const contacts = req.body.contacts;
    const email = req.body.email;
    const regNo = req.body.regNo;

    const newuser = new Users({
        agency,
        location,
        address,
        contacts,
        email,
        regNo,

    });

    newuser.save()
        .then(()=>{res.status(200).json("New user added") })
        .catch((err)=>res.status(400).json(`Error: ${err}`));
})
//delete user

router.delete('/delete/:id',(req,res)=>{
    Users.findByIdAndDelete(req.params.id)
    .then((user)=>{
        if(!user){
            return res.status(404).json();
        }
        res.json("User deleted")
    })
    .catch((error)=>{
        res.status(500).json(`Error: ${error}`);
    })
})
//update user
router.put('/update/:id', (req, res)=>{
    Users.findById(req.params.id)
    .then((user)=>{
        user.agency = req.body.agency;
        user.location= req.body.location;
        user.address= req.body.address;
        user.contacts=req.body.contacts;
        user.email=req.body.email;
        
        user.save()
        .then(()=>{
            res.status(200).json("User details updated");
        })
        .catch((error)=>{
            res.status(404).json(`Error:${error}`)
        })

    })
})






module.exports = router;