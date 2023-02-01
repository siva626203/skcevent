const mongoose = require("mongoose");

const registerSchema=new mongoose.Schema({
  lotno:{
    type:String,
    required:true
  },
  staffname:{
    type:String,
    required:true
  },
  scontact:{
    type:Number,
    required:true,
  },
  ppt:{
    type:[
      {lot:String,name:String,email:String,ph:Number}
    ],
    required:true
  },
  t_quiz:{
    type:[
      {lot:String,name:String,email:String,ph:Number}    ],
    required:true
  },
  debug:{
    type:[
      {lot:String,name:String,email:String,ph:Number}
    ],
    required:true
  },
  t_mime:{
    type:[
      {lot:String,name:String,email:String,ph:Number}
    ],
    required:true
  },
  e_ads:{
    type:[
      {lot:String,name:String,email:String,ph:Number}
    ],
    required:true
  },
  meme:{
    type:[
      {lot:String,name:String,email:String,ph:Number}
    ],
    required:true
  },
  short:{
    type:[
      {lot:String,name:String,email:String,ph:Number}
    ],
    required:true
  },
  e_poster:{
    type:[
      {lot:String,name:String,email:String,ph:Number}
    ],
    required:true
  }
})


let Register;
try {
  Register = mongoose.model("Register");
} catch {
  Register= mongoose.model("Register", registerSchema);
}
module.exports=Register;