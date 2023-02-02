import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
function Addcollege() {
    const [cname,setCname]=useState()
    const [dname,setDname]=useState();
    const [passcode,setPass]=useState();
    
    const submitform=(e)=>{
        e.preventdefault()
        axios.post("./api/college/add",{collegename:cname,department:dname,lotno:passcode})
        .then((res)=>{
            console.log(res)
            if(res.data.message==="LotNo Already Taken"){
                toast.error("Pass code Already taken")
            }else{
                toast.success("College Added")
            }
            
        })
    };
  return (
    <Form onSubmit={e=>submitform(e)}>
      <Form.Group className="mb-3">
        <Form.Label>Enter the College Name</Form.Label>
        <Form.Control placeholder="Enter College" onChange={e=>setCname(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enter the Department Name</Form.Label>
        <Form.Control placeholder="Enter Department" onChange={e=>setDname(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter the Pass Code</Form.Label>
        <Form.Control onChange={e=>setPass(e.target.value)} placeholder="passcode" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Addcollege;