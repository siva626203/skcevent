const mongoose=require('mongoose')
const facultysheema= new mongoose.Schema({
    facultyname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    eventname:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})
const Faculty=mongoose.model("faculty",facultysheema);
module.exports=Faculty;