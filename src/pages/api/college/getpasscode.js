import Register from "../../../../Models/registermodel";
import dbconnect from "../../../mongodb/index";
dbconnect();
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req,res)=>{
    try {
        const colleges=await Register.findOne({lotno:req.body.lotno});
        res.send(colleges)
    } catch (error) {
        res.send(error)
    }
}