const mongoose=require("mongoose")


const primerSchema=mongoose.Schema({
    image:{type:String,required:false},
    title:{type:String,required:false},
   
    price:{type:Number,required:false},
    country:{type:String,required:false},
    rating:{type:Number,required:false},
})



const Primermodel=mongoose.model("primer",primerSchema)


module.exports={
    Primermodel
}


// {
//     "image":"https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/285881/insight-3-in-1-long-lasting-primer-30ml-67_2_display_1630212475_7b05bb98.jpg",
//     "title":"Insight 3 In 1 Long Lasting Primer",
//     "price":198,
//     "rating":4.0
//   }