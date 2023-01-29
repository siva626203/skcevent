const mongoose=require('mongoose');
const StudentMarkScheema=new mongoose.Schema({
    FacultyName:{
        type:String,
        required:true
    },
    StudentName:{
        type:String,
        required:true
    },
    Event:{
        type:String,
        required:true
    },
    Mark:{
        type:Number,
        required:true
    },
    StaffName:{
        type:String,
        required:true
    },
    time:{
        Type:String
        
    }
})
let StudentMark;
try {
    StudentMark = mongoose.model("StudentMark");
} catch {
    StudentMark= mongoose.model("StudentMark", StudentMarkScheema);
}
module.exports=StudentMark;