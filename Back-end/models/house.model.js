const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const houseShema = new Schema({
    owner:{type: String, required: true},
    desc: {type: String, required: true},
    agent:{type: String, required: true},
    price: {type:String, required: true},
    deposit: {type:String, required: true},
    quantity: {type:String, required: true},
    houseImage:{
        data:Buffer,
        contentType:{
            type: String, required:true}
        }
       
});

const Houses = mongoose.model("Houses", houseShema);

module.exports = Houses;