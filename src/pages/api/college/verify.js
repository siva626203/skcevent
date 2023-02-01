/* eslint-disable import/no-anonymous-default-export */
import Colleges from "../../../../Models/colleges"
import dbconnect from "../../../mongodb/index";
dbconnect();
export default async (request, response) => {
    try {
      const college= await Colleges.findOne({lotno:request.body.lotno});
        if(college===null){
            response.send({message:"Check Lot Number"})
        }else{
        response.send({message:`Welcome ${college.collegename}`,data:college});
          console.log(college);
    }
    } catch (error) {
      response.status(500).send(error);
    }
    
  }