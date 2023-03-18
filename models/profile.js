const mongoose = require("mongoose");



var profile = new mongoose.Schema({
       
    uid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    main:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    niche:{
        type:String,
        required:true
    }
    ,
    image:{
        type:String,
        required:true
    }
    ,
    price:{
        type:String,
        required:true
    }


 
    
    });

    const profile1= mongoose.model('profile_t',profile);
    module.exports = profile1;