const express = require("express")
const app = express();

const { PORT = 3000 } = process.env

app.get("/", function (req, res) {
    res.send("Welcome !! ")
})

app.get("/me", function (req, res) {
    res.send("me route worked")
})

app.listen(PORT || 5000)

module.exports = app
