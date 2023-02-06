import College from "Models/colleges";
import dbconnect from "../../../mongodb/index";
dbconnect();
export default async (req,res)=>{
    try {
        const colleges=await College.find({});
    } catch (error) {
        res.send(error)
    }
}