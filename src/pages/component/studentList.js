import React from "react";
import { Button, Table } from "react-bootstrap";
import { Fragment } from "react";
import axios from "axios";
import {toast} from 'react-toastify'
class StudentList extends React.Component
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
console.log("componen")
    }

 getAll=()=>{
      axios.get("../api/student/details")
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
               <th>Lot No</th>
               <th>Student Event</th>
               <th>Event</th>
               <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {
            
            this.state.sdata.map(e=>
                <tr key={e._id}>
                    <td>{e.lot}</td>
                    <td>{e.name}</td>
                    <td>{e.event}</td>
                    <td><Button onClick={this.Delete=()=>{
                        console.log(e)
                        axios.post("../api/student/delete",e)
                        .then((req,res)=>{
                            if(req.data.message==="deleted"){
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
export default StudentList;
