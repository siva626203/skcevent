import Register from "../../../../Models/registermodel";
import dbconnect from "../../../mongodb/index";
dbconnect();
export default async (req,res)=>{
    const register=await Register.findOne({_id:req.body._id});
    try {
      if(register!== null){
        const delet=await Register.deleteOne({_id:req.body._id})
        console.log(delet)
        res.send(delet)
      }else{
        res.send("something Wrong")
      }
        
    } catch (error) {
        console.log(error);
    }
  }