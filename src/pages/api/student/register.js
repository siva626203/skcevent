import Student from '../../../../Models/studentmodel'
import dbconnect from "../../../mongodb/index";
dbconnect()
export default async (req,res,next)=>{
    try{
      const student=new Student(req.body)
      await student.save();
      res.send(student);
    }catch(e){
      console.log(e);
    }
    next();
  }