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
    required:true
  },
  ppt:{
    type:[
      {lot:String,name:String,email:String,ph:Number}
    ]
  },
  t_quiz:{
    type:[
      {lot:String,name:String,email:String,ph:Number}    ]
  },
  debug:{
    type:[
      {lot:String,name:String,email:String,ph:Number}
    ]
  },
  t_mime:{
    type:[
      {lot:String,name:String,email:String,ph:Number}
    ]
  },
  e_ads:{
    type:[
      {lot:String,name:String,email:String,ph:Number}
    ]
  },
  meme:{
    type:[
      {lot:String,name:String,email:String,ph:Number}
    ]
  },
  short:{
    type:[
      {lot:String,name:String,email:String,ph:Number}
    ]
  },
  e_poster:{
    type:[
      {lot:String,name:String,email:String,ph:Number}
    ]
  }
})


let Register;
try {
  Register = mongoose.model("Register");
} catch {
  Register= mongoose.model("Register", registerSchema);
}
module.exports=Register;