const {shortid} = require('shortid');
const URL = require('../models/url');

async function  handleGenerateShortUrl (req,res){
    const body = req.body;
    if(!body.url) res.status(500).json({message:"URL required"})
     const shortURL = shortid
    await URL.create({
        shortid:shortURL,
        redirectURL:body.url,
        visitHistory:[]
    })
}
module.exports = {
    handleGenerateShortUrl
}