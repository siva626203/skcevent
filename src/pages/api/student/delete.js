import dbconnect from "../../../mongodb/index";
import StudentMark from '../../../../Models/Faucltymarkmodel'
dbconnect()
export default async (req,res)=>{
    const faculty=await StudentMark.findOne({_id:req.body._id,StaffName:req.body.StaffName});
    try {
      if(faculty!== null){
        const delet=await faculty.deleteOne({_id:req.body._id,StaffName:req.body.StaffName})
        console.log(delet)
        res.send("deleted")
      }else{
        res.send("something Wrong")
      }   
    } catch (error) {
        console.log(error);
    }
  }