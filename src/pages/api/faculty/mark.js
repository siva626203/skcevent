import dbconnect from "../../../mongodb/index";
import StudentMark from '../../../../Models/Faucltymarkmodel'
dbconnect()
export default async(req,res)=>{
    const studentstatus = await StudentMark.findOne({FacultyName:req.body.FacultyName,StudentName:req.body.StudentName,Event:req.body.Event,StaffName:req.body.StaffName});
    try {
        console.log(studentstatus)
        if(studentstatus===null){
        const studentmark=new StudentMark(req.body);
        studentmark.save();
        res.send("data saved");
        }else{
          res.send("Mark already Posted");
        }
    } catch (error) {
        console.log(error)
    }
}