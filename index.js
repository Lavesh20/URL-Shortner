const express = require('express');
const urlRoute = require("./routes/route_url")
const {connectToMongoDB} = require('./connect');
const URL = require('./models/url');

connectToMongoDB('mongodb+srv://laveshvyas20:HYfPIVV7timUKqPN@cluster0.frfboac.mongodb.net/Short-URL')
.then(()=> console.log("MongoDb connected"))

const app = express();

app.use(express.json())

app.use("/url",urlRoute);

app.get('/:shortId',async(req,res)=>{
 const shortId = req.param.shortId;
 const entry = await URL.findOneAndUpdate({
    shortId
 },{
    $push:{
        visitHistory:{
            timestamp: new Date()
        },
    },
 })
  res.redirect(entry.redirectURL)
})

app.listen(8000,()=>{
    console.log("Server started at Port 8000");
})