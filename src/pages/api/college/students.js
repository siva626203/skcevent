/* eslint-disable import/no-anonymous-default-export */
import Register from "../../../../Models/registermodel";
import dbconnect from "../../../mongodb/index";
dbconnect();
export default async (request, response) => {
    try {
      const college= await Register.find({});
      const students=[]
      college.map((e)=>{
        students.push({passcode:e.lotno,})
      })
      
        response.send({passcode:college});
        console.log(college);
    } catch (error) {
      response.status(500).send(error);
    }   
  }