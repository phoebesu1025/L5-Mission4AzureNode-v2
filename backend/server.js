const express = require('express')
const app = express()

app.get('/', (req, res) => res.json({ message: "Hello" }))
app.listen(process.env.PORT || 8080)