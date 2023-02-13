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
      axios.get("../api/localreg/get")
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
               <th>College</th>
               <th>Event</th>
               <th>Students Name</th>
               <th>Score</th>
            </tr>
          </thead>
          <tbody>
          {
            
            this.state.sdata.map(e=>
                <tr key={e._id}>
                    <td>{e.lotno}</td>
                    <td>{e.CollegeName}</td>
                    <td>{e.EventName}</td>
                    <td>{e.Sname}</td>
                    <td>{e.Score}</td>
                </tr>
                
                )
            } 
          </tbody>

        </Table>
        </Fragment>
    }
    
}
export default StudentList;
