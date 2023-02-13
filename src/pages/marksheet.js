/* eslint-disable react/jsx-key */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { logout } from '@/features/user';
function MarkSheet() {
    const dispatch=useRouter();
    const [event,setEvent]=useState("")
    const [details,setDetails]=useState([]);
    const [student,setStudents]=useState();
    const [college,setCollege]=useState();
    const [score,setScore]=useState(0)
    const [lotno,setLot]=useState()
    const formik=useFormik({
        initialValues:{},
        onSubmit:(e)=>{
            axios.post("./api/localreg/mark",{EventName:event,Score:score,lotno:lotno})
            .then((res)=>{
                console.log(res)
            })
            toast.success("Mark Successfully Stored")
            setStudents("")
            setCollege("")
            document.getElementById("form").reset();
        }
    })
    useEffect(()=>{

        const eventname=localStorage.getItem("event")
        setEvent(eventname)
        console.log(eventname)
        if(eventname!==null){
            console.log("No Problem")
        }else{
            dispatch.push("/login")
        }
        axios.post("./api/localreg/filter",{EventName:eventname})
        .then((res)=>{
            console.log(res.data)
            setDetails(res.data)
        })
    },[])
    const Students=(data)=>{
        setLot(data)
        const result=details.filter((e)=>{return e.lotno==data})
        result.map((e)=>{return setStudents(e.Sname)&setCollege(e.CollegeName)})
        if(data==="Default"){
            setStudents("")
        }
        console.log(data)
    }
    const logout=()=>{
        localStorage.removeItem("event");
        dispatch.push("/login")
    }
  return (
    <><ToastContainer />
    <h1 className='text-center mt-5'>Score Sheet</h1>
    
    <div className='m-5 orange .bg-info'>
   <div className='text-end'><Button variant="primary"  className='btn btn-danger' onClick={e=>logout()}>
              LogOut
          </Button>
          </div>
        <Form id='form' onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
              <Form.Group className="mb-3">
                  <Form.Label>Select Lot No</Form.Label>
                  <Form.Select onChange={e => Students(e.target.value)}>
                      <option selected>Default</option>
                      {details.map((e) => { return <option value={e.lotno}>{e.lotno}</option>; })}

                  </Form.Select>
              </Form.Group>
              <Form.Label>EventName</Form.Label>
              <Form.Control value={event} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Students Name</Form.Label>
              <Form.Control value={student} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>CollegeName Name</Form.Label>
              <Form.Control value={college} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Enter a Score</Form.Label>
              <Form.Control onChange={e => setScore(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
      </Form>
      </div>
      </>
  );
}

export default MarkSheet;