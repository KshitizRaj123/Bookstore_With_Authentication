require('dotenv').config()
const connectDB = require('./db/db')
const express = require('express');
const PORT = process.env.PORT || 3000
const app = express()

console.log(PORT)

connectDB()

app.use(express.json())

app.listen(PORT,(req,res)=>
{
    console.log("Server is working!!!")
})
