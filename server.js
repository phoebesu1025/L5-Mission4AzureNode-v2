const express = require('express')
const app = express()
const env = require("dotenv")
env.config()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("listening to port", PORT)
})


app.get("/fifa", (req, res) => {
    res.send("Welcome to FIFA world Cup API")
})