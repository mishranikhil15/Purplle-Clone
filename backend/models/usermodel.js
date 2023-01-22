const mongoose=require("mongoose")


// name ==> String
// email ==> String
// gender ==> String
// password ==> String

const UserSchema=mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true},
  
  password:{type:String,required:true},
  gender:{type:String,required:true}
})

  const Usermodel=mongoose.model("loggeduser",UserSchema)

  module.exports={
    Usermodel
  }