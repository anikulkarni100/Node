const express = require("express")
const app = express();

app.get("/",function(req,res){
    res.send("It worked ")
})

app.get("/me",function(req,res){
    res.send("me worked")
})

app.listen(precess.env.PORT || 5000)
module.exports = app