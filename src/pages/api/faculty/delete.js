import dbconnect from "../../../mongodb/index";
import Faculty from '../../../../Models/facultymodel'
dbconnect();
export default async (req,res)=>{
    const faculty=await Faculty.findOne({username:req.body.username});
    try {
      if(faculty!== null){
        const delet=await faculty.deleteOne({username:req.body.username})
        console.log(delet)
        res.send(delet)
      }else{
        res.send("something Wrong")
      }   
    } catch (error) {
        console.log(error);
    }
  }