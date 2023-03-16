const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Home")
})

app.get('/test', (req, res) => {
    res.send("Test route working")
})

app.post('/test', (req, res) => {
    res.send({message: "Received test data", body: req.body})
})

app.listen(3000, () => console.log("Listening on port", 3000))