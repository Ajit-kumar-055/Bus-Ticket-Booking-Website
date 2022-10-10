const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const busSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    source:{
        type : String,
        required : true
    },
    destination:{
        type : String,
        required : true
    },
    fair:{
        type : Number,
        required : true
    },
    date:{
        type : String,
        required : true,
    }
})

module.exports = mongoose.model('bus', busSchema)