const mongoose = require("mongoose");

var cust = new mongoose.Schema({
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
    phone:{
        type:String,
        required:true
    },
 
    
    });

    const cus = mongoose.model('cust_logins',cust);
    module.exports = cus;