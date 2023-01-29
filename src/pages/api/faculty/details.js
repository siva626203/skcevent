import Faculty from "../../../../Models/facultymodel";
import dbconnect from "../../../mongodb/index";
dbconnect()
export default async (request, response) => {
    const faculty = await Faculty.find({});
    try {
      response.send(faculty);
    } catch (error) {
      response.status(500).send(error);
    }
    
  }