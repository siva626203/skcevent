import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast,ToastContainer } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function CollegeAdd(){
    const [collegename,setCname]=useState()
    const [department,setDepart]=useState();
    const [lotno,setLot]=useState()
    
    const submit=async(e)=>{
        e.preventDefault()
        try {
            await axios.post("./api/college/add",{collegename:collegename,department:department,lotno:lotno})
            .then((res)=>{
                if(res.data==="LotNo Already Taken"){
                    toast.error("passcode Already Taken")
                }else{
                    toast.success(res.data.message)
                }
                console.log(res)
            }).catch((error)=>{
                console.log(error)
            })   
        } catch (error) {
            console.log(error)
        }
       
    }
    return(<div>
        <ToastContainer/>
        <Form onSubmit={e=>{submit(e)}}>
      <Form.Group className="mb-3">
        <Form.Label>Email College Name</Form.Label>
        <Form.Control onChange={e=>setCname(e.target.value)} type="text" placeholder="Enter college name" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Enter department Name</Form.Label>
        <Form.Control onChange={e=>setDepart(e.target.value)} type="text" placeholder="department" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Passcode</Form.Label>
        <Form.Control onChange={e=>setLot(e.target.value)} type="text" placeholder="passcode" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>)
}
export default CollegeAdd;