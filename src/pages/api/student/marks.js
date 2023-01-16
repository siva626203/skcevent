import StudentMark from '../../../../Models/Faucltymarkmodel'
import dbconnect from "../../../mongodb/index";
dbconnect()
export default async (req,res)=>{
    const student=await StudentMark.find({});
    try{
      res.send(student);
    }catch(e){
      res.send(e)
    }
  }