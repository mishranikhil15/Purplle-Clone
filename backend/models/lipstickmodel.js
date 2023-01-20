const mongoose=require("mongoose")


const lipstickSchema=mongoose.Schema({
    image:{type:String,required:false},
    title:{type:String,required:false},
    rating:{type:Number,required:false},
    price:{type:Number,required:false},

    
})



const Lipstickmodel=mongoose.model("lipstick",lipstickSchema)


module.exports={
    Lipstickmodel
}