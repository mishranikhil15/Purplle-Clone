const express=require("express");

const{Cartmodel}=require("../models/cartmodel");

const cartrouter= express.Router();


cartrouter.get("/",async (req,res)=>{
    const store=req.body.userID
    try {
        const data= await Cartmodel.find({userID:store})
        res.json(data);
    } catch (error) {
        console.log(error)
    }
})


cartrouter.post("/create",async(req,res)=>{
    const store=req.body;

    try {
        const data= new Cartmodel(store);
        await data.save();
        res.status(200).json("Posted the Data")
    } catch (error) {
        console.log(error);
        res.status(408).send({"msg":"something went wrong"})
    }

})

cartrouter.delete("/:id", async (req, res) => {
    const ID = req.params.id
    const payload = req.body
    try {
        await Cartmodel.findByIdAndDelete({ _id: ID })
        res.send(`Deleted the todo data whose id is ${ID}`)
    } catch (error) {
        console.log(error);
        res.send({ "err": "something went wrong" })
    }
})

module.exports={
    cartrouter
}