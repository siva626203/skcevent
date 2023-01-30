/* eslint-disable import/no-anonymous-default-export */
import dbconnect from "../../../mongodb/index";
import Register from "../../../../Models/registermodel";
dbconnect()
export default async (req,res)=>{
    
    try {
        const add=await Register.updateOne({lotno:req.body.lot},{$push:{studentDetails:req.body}})
        console.log(add)
        res.send({message:"Student Added",add})
    } catch (error) {
        console.log(error);
        res.status(500).send("something Wrong") 
    }
  }