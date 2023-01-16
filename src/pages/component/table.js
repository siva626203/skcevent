import React from "react";
import { Button, Table } from "react-bootstrap";
import { Fragment } from "react";
import axios from "axios";
import {toast} from 'react-toastify'
class ListTable extends React.Component
{
    constructor()
    {
        super();
        this.state={
            data:[],
            fdata:[],
            
        }
    }
    componentDidMount(){

this.getAll();

    }

 getAll=()=>{
      axios.get("../api/auth/college/datails")
            .then((req,res)=>{
                this.setState({
                    data:req.data
                })
                
                console.log(req.data);
                
                console.log();
            }).catch((e)=>{
                console.log(e);
            })
            axios.get("../api/faculty/datails")
            .then((req,res)=>{
                this.setState({
                    fdata:req.data
                })
                
                console.log(req.data);
                
                console.log();
            }).catch((e)=>{
                console.log(e);
            })
        }
 
    render(){
        return <Fragment>
            <Table responsive striped bordered hover size="sm">
            <thead>
            <tr>
              <th>S.No</th>
                <th>College Name</th>
                <th>College Address</th>
                <th>Staff Name</th>
                <th>Staff Contact</th>
                <td>Delete</td>
            </tr>
          </thead>
          <tbody>
          {
            
            this.state.data.map(e=>
                <tr key={e._id}>
                    <td>{e._id}</td>
                    <td>{e.cname}</td>
                    <td>{e.caddress}</td>
                    <td>{e.sname}</td>
                    <td>{e.scontact}</td>   
                    <td><Button onClick={this.Delete=()=>{
                        console.log(e)
                          axios.delete("../api/college/delete",{data:{username:`${e.username}`}})
                          .then((req,res)=>{
                              toast.success("Deleted successfully");
                              this.getAll();
                              
                              console.log(req);
                          }).catch((e=>toast.error(e)))
                          
                    }}>Delete</Button></td>
                </tr>
                
                )
            } 
          </tbody>

        </Table>
        <Table responsive striped bordered hover size="sm">
            <thead>
            <tr>
              <th>S.No</th>
                <th>Faculty Name</th>
                <th>Faculty userName</th>
                <th>Faculty password</th>
                <th>Faculty eventname</th>
                <th>Position</th>
                <td>Delete</td>
            </tr>
            <Button onClick={this.getAll}>Refresh</Button>
          </thead>
          <tbody>
          {
            
            this.state.fdata.map(e=>
                <tr key={e._id}>
                    <td>{e._id}</td>
                    <td>{e.facultyname}</td>
                    <td>{e.username}</td>
                    <td>{e.password}</td>
                    <td>{e.eventname}</td>  
                    <td>{e.status}</td> 
                    <td><Button onClick={this.Delete=()=>{
                        console.log(e)
                          axios.delete("../api/faculty/delete",{data:{username:`${e.username}`}})
                          .then((req,res)=>{
                              toast.success("Deleted successfully");
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
export default ListTable;
