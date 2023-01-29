const mongoose=require('mongoose')
const studentscheema=mongoose.Schema({
    lotno:{
      type:String,
      required:true
    },
    sname:{
        type:String,
        required:true
    },
    event:{
        type:String,
        required:true
    },
    cname:{
        type:String,
        required:true
    }
})

let Student;
try {
  Student = mongoose.model("students");
} catch {
  Student= mongoose.model("students", studentscheema);
}
module.exports=Student;