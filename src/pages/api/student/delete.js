/* eslint-disable import/no-anonymous-default-export */
import dbconnect from "../../../mongodb/index";
import Register from "../../../../Models/registermodel";
dbconnect()
export default async (req,res)=>{
    
    try {
        const delet=await Register.update({lotno:req.body.lot},{$pull:{studentDetails:req.body}})
        console.log(delet)
        res.send({message:"deleted",delet})
    } catch (error) {
        console.log(error);
        res.status(500).send("something Wrong") 
    }
  }