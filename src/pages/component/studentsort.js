import React, { Fragment } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {Table,Button} from 'react-bootstrap'
import  {toast} from 'react-toastify'

class StudentShort extends React.Component
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
    
      axios.get("../api/student/details")
      .then()
            .then(async(req,res)=>{
                var data=req.data;
               this.setState({
                    sdata: req.data
                })
             
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
              <th>S.No</th>
               <th>Student Name</th>
               <th>Student Event</th>
               <th>Staff Name</th>
               <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {
            
           this.state.sdata.map((e)=>{
            if(e.staffname===this.props.username){
            return <Fragment key={e._id}>
                <tr key={e._id}>
                    <td>{e._id}</td>
                    <td>{e.sname}</td>
                    <td>{e.event}</td>
                    <td>{e.staffname}</td>
                    <td><Button onClick={this.Delete=()=>{
                        console.log(e)
                        axios.delete("../api/student/delete",e)
                        .then((req,res)=>{
                            if(req.data==="deleted"){
                            toast.success("Deleted successfully");
                            }else{
                                toast.error("something Wrong")
                            }
                            this.getAll();
                            
                            console.log(req);
                        }).catch((e=>toast.error(e)))
                          
                    }}>Delete</Button></td>
                </tr>
                </Fragment>
           }else{
            return null;
           }
        }
                )
        
            } 
          </tbody>

        </Table>
        </Fragment>
    }
    
}  
  export default StudentShort;