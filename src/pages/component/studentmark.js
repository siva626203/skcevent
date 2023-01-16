import React from "react";
import { Button, Table } from "react-bootstrap";
import { Fragment } from "react";
import axios from "axios";
import {toast} from 'react-toastify'
class StudentMarkList extends React.Component
{
    constructor()
    {
        super();
        this.state={
            sdata:[]
            
        }
    }
    componentDidMount(){

this.getAll();

    }

 getAll=()=>{
      axios.get("../api/student/marks")
            .then((req,res)=>{
                this.setState({
                    sdata:req.data

                })
                console.log(req.data);
            }).catch((e)=>{
                console.log(e);
            })
        }
 
    render(){
        return <Fragment>
            <Button onClick={this.getAll}>Refresh</Button>
            <Table responsive striped bordered hover size="sm">
            <thead>
            <tr>
              <th>FacultyName</th>
               <th>StudentName</th>
               <th>Event</th>
               <th>Mark</th>
               <th>StaffName</th>
               <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {
            
            this.state.sdata.map(e=>
                <tr key={e._id}>
                    <td>{e.FacultyName}</td>
                    <td>{e.StudentName}</td>
                    <td>{e.Event}</td>
                    <td>{e.Mark}</td>
                    <td>{e.StaffName}</td>
                    <td><Button onClick={this.Delete=()=>{
                        console.log(e)
                        axios.delete("../api/mark/delete",{data:{
                            _id:e._id,
                            StaffName:e.StaffName
                        }})
                        .then((req,res)=>{
                            if(req.data==="deleted"){
                            toast.success("Deleted successfully");
                            }
                            this.getAll();
                            
                            console.log(req);
                        }).catch((e=>toast.error(e)))
                          
                    }}>Delete</Button></td>
                </tr>
                
                )
            } 
          </tbody>

        </Table>
        </Fragment>
    }
    
}
export default StudentMarkList;