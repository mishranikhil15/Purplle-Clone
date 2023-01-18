const express=require("express")
const { connection } = require("./config/db")

const{ homerouter}=require("./routes/homeroute")
const cors=require("cors")

require("dotenv").config()

const app=express()

app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.use("/homepage",homerouter)


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