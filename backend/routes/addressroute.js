const express=require("express");

const {Addressmodel}=require("../models/addressmodel")


const addressrouter=express.Router();

addressrouter.get("/", async (req, res) => {
    try {
        const data = await Addressmodel.find()
        res.json(data);
    } catch (error) {
        res.send("Error while fetching the data")
        console.log(error)
    }
})
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

addressrouter.delete("/:id", async (req, res) => {
    const ID = req.params.id
    const payload = req.body
    try {
        await Addressmodel.findByIdAndDelete({ _id: ID })
        res.send(`Deleted the todo data whose id is ${ID}`)
    } catch (error) {
        console.log(error);
        res.send({ "err": "something went wrong" })
    }
})



module.exports={
    addressrouter
}