import dbconnect from "../../../mongodb/index"
import LocalReg from "../../../../Models/localreg"
dbconnect();
// eslint-disable-next-line import/no-anonymous-default-export
export default async(req,res)=>{
    try {
        console.log(req.body)
        const data=await LocalReg.updateOne({EventName:req.body.EventName,lotno:req.body.lotno},{Score:req.body.Score})
       res.send(data)
    } catch (error) {
        console.log(error)
    }
}