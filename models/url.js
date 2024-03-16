const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
        shortid:{
            type:String,
            required:true,
            unique:true
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
