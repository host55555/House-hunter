const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userShema = new Schema({
    agency:{type:String,required: true},
    location:{type:String, required:true},
    address:{type:String, required:true},
    contacts:{type:String, required:true},
    email:{type:String, required:true},
    regNo:{type:String, required:true},
});

const Users = mongoose.model("Users", userShema);

module.exports = Users;