const mongoose = require('mongoose');
const shortid = require('shortid');

const urlSchema = new mongoose.Schema({
        shortid:{
            type:String,
            required:true,
            unique:true,
            default: shortid()
            },
        redirectURL:{
            type:String,
            required:true
        },
        visitHistory:[{timeStamp: {type:Number}}]
}, {timeStamp:true}
)

const URL = mongoose.model("url",urlSchema);
module.exports  = URL;
