import dbconnect from "../../../mongodb/index";
dbconnect();
import Faculty from "../../../../Models/facultymodel";
export default async (request,response)=>{
  
    const username=await Faculty.findOne({username:request.body.username})
    console.log(username);
    
    
    try {
      if(username===null){
        const faculty=new Faculty(request.body)
    await faculty.save();
        
        response.send("Faculty saved")
      }
      else{
        response.send("username already Exist"); 
        
      }
    } catch (error) {
      response.status(500)
    }
  }