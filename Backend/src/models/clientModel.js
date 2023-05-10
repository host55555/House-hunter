const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema({
    fullName:{type:String, required:true},
    phoneNumber:{type:Number, required:true},
    email:{type:String,required:true},
    duration:{type:String, required: true}
})

const Client = mongoose.model("Client", clientSchema)

module.exports = Client        