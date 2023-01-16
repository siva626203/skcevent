import StudentMark from '../../../../Models/Faucltymarkmodel'
import dbconnect from "../../../mongodb/index";
dbconnect()
export default async (req,res)=>{
    const studentstatus = await StudentMark.findOne({FacultyName:req.body.FacultyName,StudentName:req.body.StudentName,Event:req.body.Event,StaffName:req.body.StaffName});
    
    try{ 
      console.log(studentstatus)
      if(studentstatus===null){
      const studentmark=new StudentMark(req.body);
      studentmark.save();
      res.send("data saved");
      }else{
        res.send("Mark already Posted");
      }
    }catch(e){
      res.send(e);
    }
  }