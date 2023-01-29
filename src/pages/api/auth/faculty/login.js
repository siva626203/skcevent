import Faculty from "../../../../../Models/facultymodel";
import dbconnect from "../../../../mongodb/index";
dbconnect();
export default async (request, response) => {  
    try {
      const faculty = await Faculty.findOne({username:request.body.username,password:request.body.password});
     
      if(!faculty)
      {
        response.send("user not found");
      return console.log("user not");
      
      }else{
        response.send(faculty);
        
      }
      
    } catch (error) {
      response.status(500).send(error);
    }
  }