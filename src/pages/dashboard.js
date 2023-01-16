import React, { Fragment, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../features/user";
import axios from "axios";
import ListTable from "./component/table";
import { useFormik, yupToFormErrors } from "formik";
import * as yup  from 'yup';
import {toast} from 'react-toastify'

import StudentList from "./component/studentList";
import Student from "./component/student";
import StudentShort from "./component/studentsort";
import FacultyDash from "./component/facultyform";
import StudentMarkList from "./component/studentmark";
import Header from "./component/header";
import Footer from "./component/footer";
const Dashboard=()=>{
    const formik=useFormik({
        initialValues:{
            facultyname:"",
            username:"",
            password:"",
            eventname:"",
            status:"faculty"
        },
        validationSchema:yup.object({
            facultyname:yup.string()
            .required("This Field is required"),
            username:yup.string()
            .required("*"),
            password:yup.string()
            .required("*"),
            eventname:yup.string()
            .required("Event Name is required")
        }),
        onSubmit:(data)=>{
            axios.post("./api/faculty/register",data)
            .then((req,res)=>{
                if(req.data==="username already Exist")
                {
               toast.error(req.data)
               
                }else{
                    toast.success(req.data)
                }
               
            })
            .catch((e)=>{
                console.log(e)
            })
        }
    })
    const dispatch=useDispatch();
    const navigate=useRouter()
    
    let currentUser=useSelector(state=>state.user.value)
    const [user,setUser]=useState();
   const usercheck=()=>setUser(currentUser.username);
    const check=()=>{
        usercheck()
        
        if(currentUser.username==null){
        navigate.push("/login")
        }
    }
    const Logout=()=>{
        dispatch(logout())
    navigate.push("/login")
    }
useEffect(()=>{
    check();
   
    
},[]);
    return(<>
        <div>
            <Header/>
           <h1> dashboard</h1>
           <h1>Welcome to Our {currentUser.username}</h1>
           <Button onClick={Logout}>Logout</Button><br/>
           {(currentUser.status==="admin") ? <ListTable/>:null }<br/>
           {(currentUser.status==="admin")?<Fragment><Student/><StudentList/></Fragment>:null}
           {(currentUser.status==="college")?<Fragment><Student/><StudentShort username={currentUser.username}/></Fragment>:null}
           
           {(currentUser.status==='faculty'?<Fragment><FacultyDash/></Fragment>:null)}
           {(currentUser.status==='admin')?<Fragment><StudentMarkList/></Fragment>:null}
           {(currentUser.status==="admin")? <Fragment>
            <Form className="login" onSubmit={formik.handleSubmit}>
                <Form.Label>Faculty Add Form</Form.Label>
                <Form.Group>
                <Form.Label>Enter Faculty Name</Form.Label>
                <Form.Control value={formik.values.facultyname} type="text" onChange={formik.handleChange} name="facultyname"></Form.Control>
                {<p className='text-danger'>{formik.errors.facultyname}</p>}
                <Form.Label>Enter Login Username</Form.Label>
                <Form.Control value={formik.values.username} type="text" onChange={formik.handleChange} name="username"></Form.Control>
                {<p className='text-danger'>{formik.errors.username}</p>}
                <Form.Label>Enter Login Password</Form.Label>
                <Form.Control value={formik.values.password} type="text" onChange={formik.handleChange} name="password"></Form.Control>
                {<p className='text-danger'>{formik.errors.password}</p>}
                <Form.Label>Select Event Judge</Form.Label>
                <Form.Select value={formik.values.eventname} type="text" onChange={formik.handleChange} name="eventname">
                <option>{formik.values.eventname}</option>
                 <option>Web design</option>
                 <option>Debuging</option>
                 <option>Dance</option>
                 <option>Paper presentation</option>
                </Form.Select>
                {<p className='text-danger'>{formik.errors.eventname}</p>}
                <Form.Label>Position</Form.Label>
                <Form.Control disabled value={formik.values.status} type="text" onChange={formik.handleChange} name="status"></Form.Control>
                
                <Button variant="primary" type="submit">Submit</Button>
                </Form.Group>
            </Form>
           </Fragment>
           :null}<br/>
          
        
        </div>
        <Footer/>
        </>
    )
}
export default Dashboard;