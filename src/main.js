const express = require("express")
require("dotenv").config("../.env")
const app = express()
const hostName = process.env.HOST_NAME



app.get('/', (req, res) => {

    res.send(`Hello ${hostName}`)
})

app.get('/login', (req, res) => {
    const name = req.
    res.send(`Hello ${name}`)
})

app.listen(process.env.PORT_NAME, () => {
    console.log(`Example app listening on port ${process.env.PORT_NAME}`)
})