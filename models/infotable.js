const mongoose = require("mongoose");



var infotab = new mongoose.Schema({
       
    abcode:{
        type:String,
        required:true
    },
    comments:{
        type:String,
        required:true
    },
    ratings:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }


 
    
    });

    const info = mongoose.model('info_table',infotab);
    module.exports = info;