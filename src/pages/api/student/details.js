import dbconnect from "../../../mongodb/index";
dbconnect()
import Student from "../../../../Models/studentmodel";
export default async (req,res)=>{
    try{
      const student=await Student.find({})
      res.send(student);
    }catch(e){
    res.send(e)
    }
    }