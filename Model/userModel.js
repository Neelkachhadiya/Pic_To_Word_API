var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name:{
        type:String
    },
    image1:{
        type:String
    },
    image2:{
        type:String
    },
    ans:{
        type:String
    },
    mixans:{
        type:String
    }
})
module.exports = mongoose.model("level",userschema); 