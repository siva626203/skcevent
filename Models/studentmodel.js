const mongoose=require('mongoose')
const studentscheema=mongoose.Schema({
    sname:{
        type:String,
        required:true
    },
    event:{
        type:String,
        required:true
    },
    staffname:{
        type:String,
        required:true
    }
})
const Student=mongoose.model("students",studentscheema)
module.exports=Student;