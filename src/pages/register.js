/* eslint-disable react/jsx-key */
import React, { use, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useDispatch } from 'react-redux';
import _ from "lodash";
import register from '../features/register';
import { Button, InputGroup } from 'react-bootstrap';
import { useRouter } from 'next/router';
import axios from 'axios'
import { useFormik,Field } from 'formik'
import * as yup from 'yup'
import { render } from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Header from './component/header';
import Footer from './component/footer';
const Register=()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate=useRouter();
const [lot,setLot]=useState();
const [name,setName]=useState();
const [event,setEvent]=useState();
const [details,setDetails]=useState([])
const [display,setDisplay]=useState(false)
  const formik=useFormik({
    initialValues:{
      cname:"",
      caddress:"",
      staffname:"",
      department:"",
      scontact:yup.number,
      lotno:"",
      studentDetails:details
  
    },validationSchema:yup.object({
      lotno:yup.string()
      .required("Lot no is Required"),
      cname:yup.string()
      .required("College Name Is required"),
      caddress:yup.string()
      .required("College Address is required"),
      staffname:yup.string()
      .required("Staff Name is required"),
      department:yup.string()
      .required("Department is required"),
      scontact:yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(999999999)
      .required('A phone number is required'),
      studentDetails:yup.array()
        }),
    onSubmit:(data)=>{
      console.log(data)
      axios.post("./api/college/register",data)
      .then(res=>{
        console.log(res.data)
        if(res.data.message==="Registration completed"){
          toast.success("Registration completed", {
            position: toast.POSITION.TOP_RIGHT
          });
          
          console.log(res.data.data)
        }else if(res.data==="LotNo Already Taken"){
          toast.warning("LotNo Already Taken",{
            position: toast.POSITION.TOP_RIGHT
          })
        }else{
        toast.error("Somethig Wrong", {
          position: toast.POSITION.TOP_RIGHT
        });
      }
      })
      .catch(err=>{
        toast.error(err.response.data);
      })
      
    }
  });
  const addstd=async()=>{
    details.push({lotno:formik.values.lotno,name:name,event:event})
    handleClose();
  }
  const deletestd=(e)=>{
    const index = details.indexOf(e);
if (index > -1) { // only splice array when item is found
  details.splice(index, 1); // 2nd parameter means remove one item only
}
setName("")
setEvent("")
toast.success("Student Removed", {
  position: toast.POSITION.TOP_RIGHT
});
console.log(details)
  }
   return (<><Header /><div className='rform'>

     <ToastContainer />

     <h1>Register</h1>
     <Form className='md-3' onSubmit={formik.handleSubmit}>
       <Form.Group className="mb-3" controlId="formBasicText">
         <Form.Label>Enter Lot No</Form.Label>
         <Form.Control type="text" placeholder="Enter Lot No" onChange={formik.handleChange} name="lotno" value={formik.values.lotno} />
         {formik.errors.lotno ? <p className='text-danger'>{formik.errors.lotno}</p> : null}
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicText">
         <Form.Label>Enter Your College Name</Form.Label>
         <Form.Control type="text" placeholder="Enter college Name" onChange={formik.handleChange} name="cname" value={formik.values.cname} />
         {formik.errors.cname ? <p className='text-danger'>{formik.errors.cname}</p> : null}
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicText">
         <Form.Label>Enter Your College Address</Form.Label>
         <Form.Control type="text" placeholder="Enter college Address" onChange={formik.handleChange} name="caddress" value={formik.values.caddress} />
         {formik.errors.caddress ? <p className='text-danger'>{formik.errors.caddress}</p> : null}
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicText">
         <Form.Label>Enter Staff Name</Form.Label>
         <Form.Control type="text" placeholder="Enter Staff Name" onChange={formik.handleChange} name="staffname" value={formik.values.staffname} />
         {formik.errors.staffname ? <p className='text-danger'>{formik.errors.staffname}</p> : null}
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicText">
         <Form.Label>Enter Staff Contact</Form.Label>
         <Form.Control aria-autocomplete='false' type="text" placeholder="Enter Staff No" onChange={formik.handleChange} name="scontact" value={formik.values.scontact} />
         {formik.errors.scontact ? <p className='text-danger'>{formik.errors.scontact}</p> : null}
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicText">
         <Form.Label>Enter Department</Form.Label>
         <Form.Control placeholder='Department' type="text" onChange={formik.handleChange} name="department" value={formik.values.department} />
         {formik.errors.department ? <p className='text-danger'>{formik.errors.department}</p> : null}
       </Form.Group>
       <Form.Group>
         <Table striped bordered hover>
           <thead>
             <tr>
               <th>Student Name</th>
               <th>Event</th>
               <th>Delete</th>
             </tr>
           </thead>
           <tbody>
             {details.map((e, index) => {
               return <tr>
                 <td>{e.name}</td>
                 <td>{e.event}</td>
                 <td><Button onClick={_et => deletestd(e)}>Delete</Button></td>
               </tr>;
             })}
           </tbody>
         </Table>
         <Button variant="primary" onClick={handleShow}>
           ADD studentDetails
         </Button>

         <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
             <Modal.Title>Modal heading</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <Form>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Name</Form.Label>
                 <Form.Control
                   placeholder='enter student Name'
                   onChange={e => setName(e.target.value)} />
               </Form.Group>
               <Form.Group
                 className="mb-3"
                 controlId="exampleForm.ControlTextarea1"
               >
                 <Form.Label>Select Event</Form.Label>
                 <select onChange={e => setEvent(e.target.value)}>
                   <option selected>default</option>
                   <option value="POWERPOINT-PRESENTATION">POWERPOINT-PRESENTATION</option>
                   <option value="TECHNICAL-QUIZ">TECHNICAL-QUIZ</option>
                   <option value="DEBUGGING">DEBUGGING</option>
                   <option value="TECHNICAL-MIME">TECHNICAL-MIME</option>
                   <option value="E-ADVERTISEMENT">E-ADVERTISEMENT</option>
                   <option value="TECHNICAL-DUBSMASH">TECHNICAL-DUBSMASH</option>
                   <option value="SHORT-FILM">SHORT-FILM</option>
                   <option value="E-POSTER-DESIGN">E-POSTER-DESIGN</option>
                 </select>
               </Form.Group>
             </Form>
           </Modal.Body>
           <Modal.Footer>
             <Button variant="secondary" onClick={handleClose}>
               Close
             </Button>
             <Button variant="primary" onClick={addstd}>
               Done
             </Button>
           </Modal.Footer>
         </Modal>
       </Form.Group>
       <hr/>
       <Button type='submit' className='mb-3'>SUBMIT</Button>
     </Form>
     <Footer />
   </div></>
    );
}

export default Register;