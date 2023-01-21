const express=require("express");

const {Addressmodel}=require("../models/addressmodel")


const addressrouter=express.Router();


addressrouter.post("/create",async(req,res)=>{
    const store=req.body;

    try {
        const data= new Addressmodel(store);
        await data.save();
        res.status(200).send("Posted the Data")
    } catch (error) {
        console.log(error);
        res.status(408).send({"msg":"something went wrong"})
    }

})

module.exports={
    addressrouter
}