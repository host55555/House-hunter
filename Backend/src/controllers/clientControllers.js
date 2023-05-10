const express = require('express')
const asyncHandler = require('express-async-handler')
const Client = require('../models/clientModel')
const nodemailer = require('nodemailer')

//nodemailer transpoter using a fake tester
/*const transpoter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth:{
        user:"yasmin.stiedemann@ethereal.email",
        pass:"PmtqwXQtUf2pS6FD45"
    }
})*/
const transpoter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"househunterplatform@gmail.com",
        pass:"bddqxuygidmvqjmv"
    }
})

//clients Bookings
const Book = asyncHandler (async ( req, res)=>{
    const {fullName, phoneNumber, email,duration} = req.body

    if(!fullName || !phoneNumber || !email || !duration){
        res.status(400).json({message: "All fields are required!!!"})
    }
    try{
        const client = new Client({
            fullName,
            phoneNumber,
            email,
            duration
        })
        await client.save()
        //send email to client after Booking
        /*const mailOptions ={
            from:'yasmin.stiedemann@ethereal.email',
            to: email,
            subject: "House Booking",
            text:`Hey ${fullName} you have successfully booked a house.`
        }*/
        const mailOptions ={
            from:'househunterplatform@gmail.com',
            to: email,
            subject: "House Booking",
            text: `Hey ${fullName} you have successfully booked a house for ${duration}. From house hunter platform. Hope you Enjoy your stay.

            from admin,
            Ken
            `
        }

        await transpoter.sendMail(mailOptions)
        res.status(201).json({message:'Booked Successfully'})

    }catch(error){
        res.status(400).json(error)
        

    }
})
//fetch clients
const getClients = asyncHandler(async (req,res)=>{
    const clients = await Client.find()
    if(clients){
        res.status(200).json(clients)
    }else{
        res.status(400).json({message: "Could not fetch Clients"})
    }
})

module.exports={
    Book,
    getClients
}