import React, { Fragment } from "react"
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from 'yup'
import axios from 'axios'
import {toast} from 'react-toastify'
function Student(){
    let currentUser=useSelector(state=>state.user.value)
    const formik=useFormik({
        initialValues:{
            sname:"",
            event:"default",
            staffname:currentUser.username
        },
        validationSchema:yup.object({
            sname:yup.string()
            .required("*"),
            event:yup.string()
            .required("*")
            
        }),
        onSubmit:(data)=>{
            axios.post("../api/student/register",data)
            .then((req,res)=>{
             toast.success("Data Saved"); 
             console.log(req)  
            })
            .catch((e)=>{
                console.log(e)
            })
        }
    })
   return<Fragment>
    {(currentUser.status==="college")?<Fragment>
    <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
            <Form.Label>Enter Student Name</Form.Label>
            <Form.Control type="text" name="sname" value={formik.values.sname} onChange={formik.handleChange}></Form.Control>
            {<p className='text-danger'>{formik.errors.sname}</p>}
            <Form.Label>Select the Event</Form.Label>
            <Form.Select name="event" onChange={formik.handleChange} value={formik.values.event}>
                <option>{formik.values.event}</option>
                <option>Web design</option>
                <option>Paper presentation</option>
                <option>Dance</option>
                <option>Quiz</option>
                <option>Other</option>
            </Form.Select>
            {<p className='text-danger'>{formik.errors.event}</p>}
            <Form.Label>Staff Name</Form.Label>
            <Form.Control disabled type="text" name="staffname" value={formik.values.staffname} onChange={formik.handleChange}></Form.Control>
        
            <Button type="submit">Submit</Button>
        </Form.Group>
    </Form>
    </Fragment>
    : null}
   </Fragment>
}

export default Student;