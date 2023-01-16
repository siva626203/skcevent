import Register from "../../../../../Models/registermodel";
import dbconnect from "../../../../mongodb/index";
dbconnect();
export default async (request, response) => {
    const register = await Register.find({});
  
    try {
      response.send(register);
    } catch (error) {
      response.status(500).send(error);
    }
    
  }