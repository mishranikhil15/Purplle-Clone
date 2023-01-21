const mongoose=require("mongoose")


const addressSchema=mongoose.Schema({
   fullname:{type:String,required:false},
   mobile:{type:Number,required:false},
   pincode:{type:Number,required:false},
   city:{type:String,required:false},
   state:{type:String,required:false},
   flatno:{type:String,required:false},
   area:{type:String,required:false},
   landmark:{type:String,required:false},
    
})



const Addressmodel=mongoose.model("address",addressSchema)


module.exports={
    Addressmodel
}