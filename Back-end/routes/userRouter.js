const express = require('express');
const router = express.Router();
const Users = require('../models/user.model');

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



module.exports = router;