const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const houseShema = new Schema({
    title:{type: String, required: true},
    desc: {type: String, required: true},
    agent:{type: String, required: true},
    price: {type:String, required: true},
    houseImage:{type: String, required:true}
});

const Houses = mongoose.model("Houses", houseShema);

module.exports = Houses;