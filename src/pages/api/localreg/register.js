import dbconnect from "../../../mongodb/index"
import LocalReg from "../../../../Models/localreg"
dbconnect();
// eslint-disable-next-line import/no-anonymous-default-export
export default async(req,res)=>{
    try {
        const data=await LocalReg.findOne({lotno:req.body.lotno,EventName:req.body.EventName})
        if(data===null){
            const saved=new LocalReg(req.body)
            await saved.save();
            res.send({Message:"Registerd",data:saved})
        }else{
            res.send("This Lot No Already Take this Event")
        }
    } catch (error) {
        console.log(error)
    }
}