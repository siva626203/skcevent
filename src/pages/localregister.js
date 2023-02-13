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
    const [student,setStudents]=useState();
    const [college,setCollege]=useState();
    const [score,setScore]=useState(0)
    const [lotno,setLot]=useState()
    const formik=useFormik({
        initialValues:{},
        onSubmit:(e)=>{
            axios.post("./api/localreg/register",{ lotno:lotno,
            EventName:event,
            Sname:student,
            CollegeName:college,
            Score:0})
            .then((res)=>{
                if(res.data==="This Lot No Already Take this Event")
                {
                    toast.error(res.data)
                }else{
                toast.success("Success")
                console.log(res)
                }
            })
            
            setStudents("")
            setCollege("")
            setLot("")
            document.getElementById("form").reset();
        }
    })
  return (
    <><ToastContainer />
    <h1 className='text-center mt-5'>Local Registration Form</h1>
    
    <div className='m-5 orange .bg-info'>
        <Form id='form' onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
              <Form.Group className="mb-3">
                  <Form.Label>Select EventName</Form.Label>
                  <Form.Select value={event} onChange={e => setEvent(e.target.value)}>
                      <option selected>Default</option>
                    <option value="POWERPOINT-PRESENTATION">POWERPOINT-PRESENTATION</option>
                   <option value="TECHNICAL-QUIZ">TECHNICAL-QUIZ</option>
                   <option value="DEBUGGING">DEBUGGING</option>
                   <option value="TECHNICAL-MIME">TECHNICAL-MIME</option>
                   <option value="E-ADVERTISEMENT">E-ADVERTISEMENT</option>
                   <option value="MEME-CREATION">MEME-CREATION</option>
                   <option value="SHORT-FILM">SHORT-FILM</option>
                   <option value="E-POSTER-DESIGN">E-POSTER-DESIGN</option>
                  </Form.Select>
              </Form.Group>
              <Form.Label>Enter College Name</Form.Label>
              <Form.Control onChange={e=>setCollege(e.target.value)} value={college} required/>
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Enter Students Name</Form.Label>
              <Form.Control size="lg" type="text" onChange={e=>setStudents(e.target.value)} value={student} required/>
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Enter a Lot No</Form.Label>
              <Form.Control type="text" onChange={e => setLot(e.target.value)} required />
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