import dbconnect from "../../../mongodb/index"
import Image from '../../../../Models/images'
dbconnect();
export default async (req,res)=>{
try {
    const data=await Image.update({})
    res.send(data)
} catch (error) {
    console.log(error)
}
}