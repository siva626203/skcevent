import dbconnect from "../../../../mongodb/index";
import Admin from '../../../../../Models/adminmodel'
dbconnect()
export default async (req, res) => {
    
  
    try {
      console.log(req.body)
      const admin = await Admin.findOne({username:req.body.username,password:req.body.password});
     
      if(admin===null)
      {
        console.log(admin)
        res.send("user not found");
      return console.log("user not");
      
      }else{
        res.send(admin.status);
      }
      
    } catch (error) {
      response.status(500).send(error);
    }
  }