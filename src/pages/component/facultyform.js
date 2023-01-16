import React, { Fragment, useEffect, useState } from "react";
import {Button, Form} from 'react-bootstrap'
import axios from "axios";
import { useSelector,useDispatch } from 'react-redux';
import {  useFormik } from "formik";
import * as yup from 'yup';
import { toast } from "react-toastify";
function FacultyDash(){
    const [data,setData]=useState({})
    const [sdata,setSdata]=useState([])
    const currentUser=useSelector(state=>state.user.value)
    
    const formik=useFormik({
        initialValues:{
            FacultyName:currentUser.username,
            Event:data.username,
            StudentName:"",
            Mark:null,
            StaffName:"",
            time:""
        },
        validationSchema:yup.object({
            FacultyName:yup.string()
            .required("This Field is required"),
            StudentName:yup.string()
            .required("*"),
            Event:yup.string()
            .required("*"),
            Mark:yup.number()
            .required("*"),
            StaffName:yup.string()
            .required("*"),
            time:yup.string()
            .required("*")
        }),
        onSubmit:(data)=>{
            console.log(data)
            axios.post("../api/faculty/mark",data)
            .then((req,res)=>{
                console.log(req)
                if(req.data==="data saved")
                {
               toast.success("mark Saved")
                }
                if(req.data==="Mark already Posted"){
                 toast.error("Mark already Posted")
                }
               
            })
            .catch((e)=>{
                console.log(e)
            })
        }
    })
    useEffect(()=>{
        axios.post("../api/faculty/filter",{username:currentUser.username})
        .then((req,res)=>{
        setData(req.data)
        console.log(req)
        })
     axios.get("../api/student/details")
        .then((req,res)=>{
            console.log(req)
           setSdata(req.data);
        })
    },[])
    console.log(formik.values.Event)
    return<Fragment>
              <Form className="login" onSubmit={formik.handleSubmit}>
                <Form.Label>Faculty Mark Entry Form</Form.Label>
                <Form.Group>
                <Form.Label>Faculty Name</Form.Label>
                <Form.Control disabled value={formik.values.FacultyName} type="text" onChange={formik.handleChange} name="FacultyName"></Form.Control>
                {<p className='text-danger'>{formik.errors.FacultyName}</p>}
                <Form.Label>Event Name</Form.Label>
                <Form.Control value={formik.values.Event} type="text" onChange={formik.handleChange} name="Event"></Form.Control>
                {<p className='text-danger'>{formik.errors.Event}</p>}
                <Form.Label>Student Name</Form.Label>
                <Form.Select value={formik.values.StudentName} type="text" onChange={formik.handleChange} name="StudentName">
                <option>{formik.values.StudentName}</option>
                {sdata.map(e=>{
                    if(data.eventname===e.event){
                        return<option key={e._id}>{e.sname}</option>
                    }
                })}
                </Form.Select>
                {<p className='text-danger'>{formik.errors.StudentName}</p>}
                <Form.Label>StaffName</Form.Label>
                <Form.Select value={formik.values.StaffName} type="text" onChange={formik.handleChange} name="StaffName">
                <option>{formik.values.StaffName}</option>
                {sdata.map(e=>{
                    if(data.eventname===e.event){
                        return<option key={e._id}>{e.staffname}</option>
                    }
                })}
                </Form.Select>
                {<p className='text-danger'>{formik.errors.StaffName}</p>}
                <Form.Label>Mark</Form.Label>
                <Form.Control  value={formik.values.Mark} onChange={formik.handleChange} name="Mark"></Form.Control>
                {<p className='text-danger'>{formik.errors.Mark}</p>}
                <Form.Label>Time</Form.Label>
                <Form.Control value={formik.values.time} type="text" onChange={formik.handleChange} name="time"></Form.Control>
                {<p className='text-danger'>{formik.errors.time}</p>}
                <Button variant="primary" type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </Fragment>
    
}

export default FacultyDash;