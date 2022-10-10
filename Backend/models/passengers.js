const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const passengerSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : true
    },
    lastName:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    noOfPassenger:{
        type : Number,
        required : true
    },
    busId:{
        type : String,
        required : true
    },
    total:{
        type : Number,
        required : true
    }
})

module.exports = mongoose.model('passengers', passengerSchema)