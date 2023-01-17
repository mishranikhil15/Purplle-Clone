const express=require("express")
const { connection } = require("./config/db")

const app=express()

require("dotenv").config()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome")
})




app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
        console.log("Trouble while connecting to DB")
    }
    console.log(`connected to ${process.env.port}`)
})