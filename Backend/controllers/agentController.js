const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Agent = require('../models/agentModel')
const User = require('../models/userModel')

//@desc register new agent
//@route POST api/agents
//private
const registerAgent = asyncHandler (async(req,res)=>{
    const {agency, location, address,contacts,email} = req.body
     //check if all fields are availble
     if(!agency || !location || !address || !contacts || !email){
        res.status(400)

        throw new Error('All fields are required!!')

     }
     // check if user exists
     const agentExist = await Agent.findOne({email: email})
     if(agentExist){
        res.status(400)
         throw new Error('Agent already exists!!')
     }

     //add a new agent
     const agent = await Agent.create({
        agency,
        location,
        address,
        contacts,
        email
     })
     if(agent){
        res.status(201).json({agent})
     }else{
        res.status(401)
        throw new Error('User not found!!')
    }
})

//@desc create user account
//@route POST api/agents
//public
const createAccount = asyncHandler(async (req, res)=>{
    const {agency,email, password} = req.body

    //check for empty fields
    if(!agency ||!email || !password){
        res.status(400)
        throw new Error('All fields are required!!')
    }
    //check if email is registered in agents database
    const emailRegistered = await Agent.findOne({email:email})

    if(emailRegistered){
        //check if user account exists
        const userExists = await User.findOne({email: email})
        if(userExists){
            res.status(400)

            throw new Error('User Already Exists!!')
        }
        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        //create user
        const user = await User.create({
            agency,
            email,
            password: hashedPassword,
            token: generateToken(user._id)
        })

        if(user){
            res.status(200).json({user})
        }else{
            res.status(400)
            throw new Error('something went wrong!!!')
        }
    }else{
        res.status(401)

        throw new Error('Email is not registered Contact admin!!')
    }
})
//@desc login user 
//@route POST api/login
//public
const loginAgent = asyncHandler(async(req,res)=>{
    const {email, password} = req.body
    //check if user exists
    const user = await User.findOne({email: email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user.id,
            agency:user.agency,
            email:user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error('User Not found')
    }
})
//generate token
 const generateToken = (id)=>{
    const secret ='Mysecret123'

    return jwt.sign({id}, secret,{
        expiresIn: '2d',
    })
 }



module.exports ={
    registerAgent,
    createAccount,
    loginAgent
}