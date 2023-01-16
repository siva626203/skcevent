const mongoose = require("mongoose");

const registerSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  cname:{
  type: String,
  required: true,
  },
  caddress:{
    type: String,
    required:true
  },
  sname:{
    type: String,
    required:true
  },
  status:{
    type:String
  },
  scontact:{
    type:Number,
    required:true,
    
  }
})


const Register=mongoose.model("Register",registerSchema)

module.exports=Register;