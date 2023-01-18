const mongoose=require("mongoose")

// const homelargeSchema=mongoose.Schema({
//     image:{type:String,required:true}
// })

// const homemediumSchema=mongoose.Schema({
//     image:{type:String,required:true}
// })


const homeSchema=mongoose.Schema({
    image:{type:String,required:false},
    name:{type:String,required:false},
    rating:{type:Number,required:false},
    price:{type:Number,required:false},
    type:{type:String,require:false}
    
})

// const Homelargemodel=mongoose.model("homelarge",homelargeSchema)

// const Homemediummodel=mongoose.model("homemedium",homemediumSchema)

const Homemodel=mongoose.model("home",homeSchema)


module.exports={
    // Homelargemodel,
    // Homemediummodel,
    Homemodel
}