import Register from "../../../../Models/registermodel";
import dbconnect from "../../../../mongodb/index";
dbconnect();
export default async (req,res)=>{
    const register=await Register.findOne({username:req.body.username});
    try {
      if(register!== null){
        const delet=await Register.deleteOne({username:req.body.username})
        console.log(delet)
        res.send(delet)
      }else{
        res.send("something Wrong")
      }
        
    } catch (error) {
        console.log(error);
    }
  }