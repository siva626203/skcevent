import Register from "../../../../Models/registermodel";
import dbconnect from "../../../mongodb/index";
dbconnect();
// eslint-disable-next-line import/no-anonymous-default-export
export default async (request,response)=>{
    try {
        const find=await Register.findOne({lotno:request.body.lotno});
        console.log(find)
        if(find===null){
          const register=new Register(request.body)
          await register.save();
          response.send({message:"Registration completed",data:register})
          console.log(register);
        }else{
          response.send("LotNo Already Taken")
        }
       
    } catch (error) {
      response.status(500).send("something wrong")
    }
  }