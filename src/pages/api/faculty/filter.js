import dbconnect from "../../../mongodb/index";
import Faculty from '../../../../Models/facultymodel'
dbconnect()
export default async (req,res)=>{
    const faculty=await Faculty.findOne({username:req.body.username})
    try{
      res.send(faculty);
      console.log(faculty);
    }catch(e){
      res.send(e)
    }
  }