const mongoose = require("mongoose");

var msanii = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
 
    
    });

    const user = mongoose.model('msanii_log',msanii);
    module.exports = user;