const express=require("express")

const{Homemodel}=require("../models/homepagemodel")

const homerouter=express.Router()

homerouter.get("/",async(req,res)=>{
     const query=req.query.type
try {
    if (query!==undefined) {
        const data= await Homemodel.find({type:query})
        res.status(200).json(data)
    } else {
        const data= await Homemodel.find()
        res.status(200).json(data)
    }
   
} catch (error) {
    console.log(error);
    res.status(404).send({"msg":"something went wrong"})
}
})

homerouter.post("/create",async(req,res)=>{
    const store=req.body;

    try {
        const data= new Homemodel(store);
        await data.save();
        res.status(200).send("Posted the Data")
    } catch (error) {
        console.log(error);
        res.status(408).send({"msg":"something went wrong"})
    }

})

module.exports={
    homerouter
}