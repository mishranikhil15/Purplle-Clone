const mongoose=require("mongoose")


const cartSchema=mongoose.Schema({
    image:{type:String,required:false},
    title:{type:String,required:false},
    rating:{type:Number,required:false},
    country:{type:String,required:false},
    price:{type:Number,required:false},
    userID:{type:String,required:true}

    
})



const Cartmodel=mongoose.model("cartproducts",cartSchema)


module.exports={
    Cartmodel
}