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
import { toast } from 'react-toastify';


function Register() {
  const navigate=useRouter();

  const formik=useFormik({
    initialValues:{
      username:"",
      password:"",
      cname:"",
      caddress:"",
      sname:"",
      status:"college",
      scontact:yup.number
  
    },validationSchema:yup.object({
      cname:yup.string()
      .required("College Name Is required"),
      caddress:yup.string()
      .required("College Address is required"),
      sname:yup.string()
      .required("Staff Name is required"),
      status:yup.string()
      .required("default value")
      .default("college"),
      scontact:yup.number()
      .required("Staff Contact Number is required")
        }),
    onSubmit:(data)=>{
      console.log(data)
      axios.post("https://skc-api-db.herokuapp.com/api/college/register",data)
      .then(res=>{
        if(res.data==="username already Exist"){
          toast.error(res.data);
        }
        else{
        toast.success("success", {
          position: toast.POSITION.TOP_RIGHT
        });

        navigate.push("/login")
      }
      })
      .catch(err=>{
        toast.error(err.response.data);
      })
      
    }
  });
   return (
        <div className='rform'>
            <h1>Register</h1> 
            <Form className='md-3' onSubmit={formik.handleSubmit}>
              <Form.Group>
                <Form.Label>Enter the UserName</Form.Label>
              <InputGroup>
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={formik.values.username}
        onChange={formik.handleChange}
        name="username"
        />
      </InputGroup>
      <Form.Label className="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        value={formik.values.password}
        onChange={formik.handleChange}
        name="password"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
              </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Your College Name</Form.Label>
        <Form.Control type="text" placeholder="Enter college Name" onChange={formik.handleChange} name="cname" value={formik.values.cname}/> 
        {formik.errors.cname ?<p className='text-danger'>{formik.errors.cname}</p>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Your College Address</Form.Label>
        <Form.Control type="text" placeholder="Enter college Address" onChange={formik.handleChange} name="caddress" value={formik.values.caddress}/> 
        {formik.errors.caddress ?<p className='text-danger'>{formik.errors.caddress}</p>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Staff Name</Form.Label> 
       <Form.Control type="text" placeholder="Enter Staff Name" onChange={formik.handleChange} name="sname" value={formik.values.sname}/> 
       {formik.errors.sname ?<p className='text-danger'>{formik.errors.sname}</p>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Staff Contact</Form.Label>
        <Form.Control aria-autocomplete='false' type="text" placeholder="Enter Staff No" onChange={formik.handleChange} name="scontact" value={formik.values.scontact}/> 
        {formik.errors.scontact ?<p className='text-danger'>{formik.errors.scontact}</p>:null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Position</Form.Label>
        <Form.Control disabled placeholder='college' type="text"  onChange={formik.handleChange} name="status" value={formik.values.status}/> 
        {formik.errors.status ?<p className='text-danger'>{formik.errors.status}</p>:null}
      </Form.Group>
                  <Button type='submit' className='mb-3'>SUBMIT</Button>
      </Form>
        </div>
    );
}

export default Register;