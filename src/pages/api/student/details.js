import dbconnect from "../../../mongodb/index";
dbconnect()
import Register from "../../../../Models/registermodel";
export default async (req,res)=>{
    try{
      const student=await Register.find({})
      let std=[];
      await student.map((e)=>{std.push(e.studentDetails)})
      const merge3 = std.flat(1);
      res.send(merge3);
    }catch(e){
    res.send(e)
    }
    }