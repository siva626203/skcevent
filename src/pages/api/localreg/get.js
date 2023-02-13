import dbconnect from "../../../mongodb/index"
import LocalReg from "../../../../Models/localreg"
dbconnect();
// eslint-disable-next-line import/no-anonymous-default-export
export default async(req,res)=>{
    try {
        const data=await LocalReg.find({})
       res.send(data)
    } catch (error) {
        console.log(error)
    }
}