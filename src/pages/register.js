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
import Container from 'react-bootstrap/Container';
const Register=()=> {
  const [show, setShow] = useState(false);
 const [verification,setVerify]=useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [lotverify,setLotverify]=useState();
  const navigate=useRouter();
const [lot,setLot]=useState();
const [name,setName]=useState();
const [event,setEvent]=useState();
const [details,setDetails]=useState([])
const [display,setDisplay]=useState(false)
const [coname,setconame]=useState();
const [dname,setDname]=useState();
const [lotnum,setLotno]=useState()
const [ppt1,setPpt1]=useState({lot:lotnum,name:"",email:"",ph:0})
const [ppt2,setPpt2]=useState({lot:lotnum,name:"",email:"",ph:0})
const [t_quiz1,setT_quiz1]=useState({lot:lotnum,name:"",email:"",ph:0})
const [t_quiz2,setT_quiz2]=useState({lot:lotnum,name:"",email:"",ph:0})
const [debug,setDebug]=useState({lot:lotnum,name:"",email:"",ph:0})
const [t_mime1,setT_mime1]=useState({lot:lotnum,name:"",email:"",ph:0})
const [t_mime2,setT_mime2]=useState({lot:lotnum,name:"",email:"",ph:0})
const [t_mime3,setT_mime3]=useState({lot:lotnum,name:"",email:"",ph:0})
const [t_mime4,setT_mime4]=useState({lot:lotnum,name:"",email:"",ph:0})
const [t_mime5,setT_mime5]=useState({lot:lotnum,name:"",email:"",ph:0})
const [e_ads1,setE_ads1]=useState({lot:lotnum,name:"",email:"",ph:0})
const [e_ads2,setE_ads2]=useState({lot:lotnum,name:"",email:"",ph:0})
const [e_ads3,setE_ads3]=useState({lot:lotnum,name:"",email:"",ph:0})
const [meme1,setMeme1]=useState({lot:lotnum,name:"",email:"",ph:0})
const [e_poster,setE_Poster]=useState({lot:lotnum,name:"",email:"",ph:0})
const [short1,setShort1]=useState({lot:lotnum,name:"",email:"",ph:0})
const [short2,setShort2]=useState({lot:lotnum,name:"",email:"",ph:0})
const [short3,setShort3]=useState({lot:lotnum,name:"",email:"",ph:0})
const [short4,setShort4]=useState({lot:lotnum,name:"",email:"",ph:0})
const getverify=()=>{
  axios.post("./api/college/verify",{lotno:formik.values.lotno})
  .then((res)=>{
    console.log(res.data)
    if(res.data.message==="Check Lot Number"){
      toast.error("Check Pass Code"),{
        position: toast.POSITION.TOP_RIGHT
      }
      setVerify(false)
     
    }else{
    toast.success("Welcome", {
      position: toast.POSITION.TOP_RIGHT
    });
    setLotno(formik.values.lotno)
    setVerify(true)
    setconame(res.data.data.collegename);
    setDname(res.data.data.department);
  }
  }).catch(error=>{
    console.log(error)
  })
}
  const formik=useFormik({
    initialValues:{
      staffname:"",
      scontact:yup.number,
      lotno:"",
    },validationSchema:yup.object({
      lotno:yup.string()
      .required("pass code is Required"),
      staffname:yup.string()
      .required("Staff Name is required"),
      scontact:yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(999999999)
      .required('A phone number is required'),
        }),
    onSubmit:(data)=>{
      const datas={
        staffname:formik.values.staffname,
        scontact:formik.values.scontact,
        lotno:formik.values.lotno,
        ppt:[
            ppt1,
            ppt2
        ],
        t_quiz:[
          t_quiz1,
          t_quiz2
        ],
        debug:[
          debug
        ],
        t_mime:[
          t_mime1,
          t_mime2,
          t_mime3,
          t_mime4,
          t_mime5
        ],
        e_ads:[
          e_ads1,
          e_ads2,
          e_ads3
        ],
        meme:[
          meme1
        ],
        short:[
          short1,short2,short3,short4
        ],
        e_poster:[
          e_poster
        ]
  }
      console.log(datas)
      axios.post("./api/college/register",datas)
      .then(res=>{
        console.log(res.data)
        if(res.data.message==="Registration completed"){
          toast.success("Registration completed", {
            position: toast.POSITION.TOP_RIGHT
          });
          console.log(lotnum)
          console.log(res.data.data)
        }else if(res.data.message==="LotNo Already Taken"){
          toast.error("Already Registred", {
            position: toast.POSITION.TOP_RIGHT
          });
        }
        else{
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
useEffect(()=>{
  console.log(lotnum)
})
   return (<><Header /><div className='rform'>

     <ToastContainer />

     <h1 className='register-text'>Registration</h1>
     <br/>
     <Form className='md-3' onSubmit={formik.handleSubmit}>
      {verification?null:<><Container>
        <Form.Group className="mb-3" controlId="formBasicText">
          <h6 className='note'>Note: To register INFOSEA 2K23, use you're allotted College Passcode, or wants a new Passcode (for new college's)</h6>
          <h6 className='note-2'>Contact: 95667 74028</h6>
         <Row  className="justify-content-md-center">
             <Col><Form.Label>Enter Pass Code</Form.Label></Col>
             <Col> <Form.Control type="text" placeholder="Enter Pass Code" onChange={formik.handleChange} name="lotno" value={formik.values.lotno} />
               {formik.errors.lotno ? <p className='text-danger'>{formik.errors.lotno}</p> : null}
              <Form.Text>Your Pass code is LOT NO</Form.Text>
               </Col>
           </Row><br/>
           <Button variant="success" onClick={e => getverify()}>Get Form</Button>
           </Form.Group>
       </Container></>
       
       }  
        
       
       
       {verification?<>
       <h1>{coname}</h1>
       <h5>{dname}</h5>
       <Container>
       <Form.Group className="mb-3" controlId="formBasicText">
       <Row  className="justify-content-md-center">
        <Col><Form.Label>Enter Staff Name</Form.Label></Col>
        <Col><Form.Control type="text" placeholder="Enter Staff Name" onChange={formik.handleChange} name="staffname" value={formik.values.staffname} />
        {formik.errors.staffname ? <p className='text-danger'>{formik.errors.staffname}</p> : null}</Col>
        </Row>
        </Form.Group><Form.Group className="mb-3" controlId="formBasicText">
          <Row className="justify-content-md-center">
        <Col><Form.Label>Enter Staff Contact</Form.Label></Col>
        <Col><Form.Control aria-autocomplete='false' type="text" placeholder="Enter Staff No" onChange={formik.handleChange} name="scontact" value={formik.values.scontact} />
        {formik.errors.scontact ? <p className='text-danger'>{formik.errors.scontact}</p> : null}</Col>
        </Row>
        </Form.Group>
       </Container>
         
         <Form.Group>
           <Table striped bordered hover>
             <thead>
               <tr>
               <th>Event Name</th>
                 <th>Student Name</th>
                 <th>Email</th>
                 <th>PHNO</th>
               </tr>
             </thead>
             <tbody>
               
                  <tr>
                  <td>POWERPOINT-PRESENTATION</td>
                  <td><Form.Control required onChange={e=>setPpt1(pre=>({...pre,name:e.target.value}))}/><Form.Control required onChange={e=>setPpt2(pre=>({...pre,name:e.target.value}))}/></td>
                   <td><Form.Control required onChange={e=>setPpt1(pre=>({...pre,email:e.target.value}))}/><Form.Control required onChange={e=>setPpt2(pre=>({...pre,email:e.target.value}))}/></td>
                   <td><Form.Control required onChange={e=>setPpt1(pre=>({...pre,ph:e.target.value}))}/><Form.Control required onChange={e=>setPpt2(pre=>({...pre,ph:e.target.value}))}/></td>
                 </tr>
                 <tr>
                  <td>TECHNICAL-QUIZ</td>
                   <td><Form.Control required onChange={e=>setT_quiz1(pre=>({...pre,name:e.target.value}))}/><Form.Control required onChange={e=>setT_quiz2(pre=>({...pre,name:e.target.value}))}/></td>
                   <td><Form.Control required onChange={e=>setT_quiz1(pre=>({...pre,email:e.target.value}))}/><Form.Control required onChange={e=>setT_quiz2(pre=>({...pre,email:e.target.value}))}/></td>
                   <td><Form.Control required onChange={e=>setT_quiz1(pre=>({...pre,ph:e.target.value}))}/><Form.Control required onChange={e=>setT_quiz2(pre=>({...pre,ph:e.target.value}))}/></td>
                 </tr>
                 <tr>
                  <td>DEBUGGING</td>
                   <td><Form.Control required onChange={e=>setDebug(pre=>({...pre,name:e.target.value}))}/></td>
                   <td><Form.Control required  onChange={e=>setDebug(pre=>({...pre,email:e.target.value}))}/></td>
                   <td><Form.Control required  onChange={e=>setDebug(pre=>({...pre,ph:e.target.value}))}/></td>
                 </tr>
                 <tr>
                  <td>TECHNICAL-MIME</td>
                   <td><Form.Control required onChange={e=>setT_mime1(pre=>({...pre,name:e.target.value}))}/><Form.Control required onChange={e=>setT_mime2(pre=>({...pre,name:e.target.value}))}/><Form.Control required onChange={e=>setT_mime3(pre=>({...pre,name:e.target.value}))}/><Form.Control required onChange={e=>setT_mime4(pre=>({...pre,name:e.target.value}))}/><Form.Control required onChange={e=>setT_mime5(pre=>({...pre,name:e.target.value}))}/></td>
                   <td><Form.Control required onChange={e=>setT_mime1(pre=>({...pre,email:e.target.value}))}/><Form.Control required onChange={e=>setT_mime2(pre=>({...pre,email:e.target.value}))}/><Form.Control required onChange={e=>setT_mime3(pre=>({...pre,email:e.target.value}))}/><Form.Control required onChange={e=>setT_mime4(pre=>({...pre,email:e.target.value}))}/><Form.Control required onChange={e=>setT_mime5(pre=>({...pre,email:e.target.value}))}/></td>
                   <td><Form.Control required onChange={e=>setT_mime1(pre=>({...pre,ph:e.target.value}))}/><Form.Control required onChange={e=>setT_mime2(pre=>({...pre,ph:e.target.value}))}/><Form.Control required onChange={e=>setT_mime3(pre=>({...pre,ph:e.target.value}))}/><Form.Control required onChange={e=>setT_mime4(pre=>({...pre,ph:e.target.value}))}/><Form.Control required onChange={e=>setT_mime5(pre=>({...pre,ph:e.target.value}))}/></td>
                 </tr>
                 <tr>
                  <td>MEME CREATION</td>
                   <td><Form.Control required onChange={e=>setMeme1(pre=>({...pre,name:e.target.value}))}/></td>
                   <td><Form.Control required onChange={e=>setMeme1(pre=>({...pre,email:e.target.value}))}/></td>
                   <td><Form.Control required onChange={e=>setMeme1(pre=>({...pre,ph:e.target.value}))}/></td>
                 </tr>
                 <tr>
                  <td>E-ADVERTISEMENT</td>
                   <td><Form.Control required onChange={e=>setE_ads1(pre=>({...pre,name:e.target.value}))}/><Form.Control required onChange={e=>setE_ads2(pre=>({...pre,name:e.target.value}))}/><Form.Control required onChange={e=>setE_ads3(pre=>({...pre,name:e.target.value}))}/></td>
                   <td><Form.Control required onChange={e=>setE_ads1(pre=>({...pre,email:e.target.value}))}/><Form.Control required onChange={e=>setE_ads2(pre=>({...pre,email:e.target.value}))}/><Form.Control requiredonChange={e=>setE_ads3(pre=>({...pre,email:e.target.value}))}/></td>
                   <td><Form.Control required onChange={e=>setE_ads1(pre=>({...pre,ph:e.target.value}))}/><Form.Control required onChange={e=>setE_ads2(pre=>({...pre,ph:e.target.value}))}/><Form.Control required onChange={e=>setE_ads3(pre=>({...pre,ph:e.target.value}))}/></td>
                 </tr>
                 {/* <tr>
                  <td>TECHNICAL-DUBSMASH</td>
                   <td><Form.Control required/></td>
                   <td><Form.Control required/></td>
                   <td><Form.Control required/></td>
                 </tr> */}
                 <tr>
                  <td>SHORT-FILM</td>
                   <td><Form.Control required onChange={e=>setShort1(pre=>({...pre,name:e.target.value}))}/><Form.Control required onChange={e=>setShort2(pre=>({...pre,name:e.target.value}))}/><Form.Control onChange={e=>setShort3(pre=>({...pre,name:e.target.value}))} required/><Form.Control required onChange={e=>setShort4(pre=>({...pre,name:e.target.value}))}/></td>
                   <td><Form.Control required onChange={e=>setShort1(pre=>({...pre,email:e.target.value}))}/><Form.Control required onChange={e=>setShort2(pre=>({...pre,email:e.target.value}))}/><Form.Control required onChange={e=>setShort3(pre=>({...pre,email:e.target.value}))}/><Form.Control required onChange={e=>setShort4(pre=>({...pre,email:e.target.value}))}/></td>
                   <td><Form.Control required onChange={e=>setShort1(pre=>({...pre,ph:e.target.value}))}/><Form.Control required onChange={e=>setShort2(pre=>({...pre,ph:e.target.value}))}/><Form.Control required onChange={e=>setShort3(pre=>({...pre,ph:e.target.value}))}/><Form.Control required onChange={e=>setShort4(pre=>({...pre,ph:e.target.value}))}/></td>
                 </tr>
                 <tr>
                  <td>E-POSTER-DESIGN</td>
                   <td><Form.Control required onChange={e=>setE_Poster(pre=>({...pre,name:e.target.value}))}/></td>
                   <td><Form.Control required onChange={e=>setE_Poster(pre=>({...pre,email:e.target.value}))}/></td>
                   <td><Form.Control required onChange={e=>setE_Poster(pre=>({...pre,ph:e.target.value}))}/></td>
                 </tr>

             </tbody>
           </Table>
           {/* <Button variant="primary" onClick={handleShow}>
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
           </Modal> */}
         </Form.Group><hr /><Button type='submit' className='mb-3'>SUBMIT</Button></>:null}
       
     </Form>
     <Footer />
   </div></>
    );
}

export default Register;