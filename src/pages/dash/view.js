/* eslint-disable react/jsx-key */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function View() {
    const [data,setData]=useState();
    const [college,setCollege]=useState()
    const getData=async()=>{
      const code=localStorage.getItem("Passcode")
       console.log(code)
      await  axios.post("../api/college/verify",{lotno:code})
       .then((res)=>{
        console.log(res.data)
        setCollege(res.data.data)
       })
      await axios.post("../api/college/getpasscode",{lotno:code})
       .then((res)=>{
        setData(res.data)
        console.log(res.data)
       })
    }
    useEffect(()=>{
       getData();
    },[])
    const print=()=>{
        window.print()
    }
  return (<div>
    <Button onClick={e=>print()}>Print</Button>
    <h1 className='text-center'>College Details</h1>
    {data?<Container>
      <Row>
        <Col>College Name</Col>
        <Col>{college.collegename}</Col>
      </Row>
      <Row>
        <Col>Department Name</Col>
        <Col>{college.department}</Col>
      </Row>
      <Row>
        <Col>Staff Name</Col>
        <Col>{data.staffname}</Col>
      </Row>
      
      <Row>
        <Col>Mobile No</Col>
        <Col>{data.scontact}</Col>
      </Row>
      <Row>
        <Col>Email Id</Col>
        <Col>{data.email}</Col>
      </Row>
      <Row>
        <Col>Pass Code</Col>
        <Col>{college.lotno}</Col>
      </Row>
      </Container>:null}
    
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Student Name</th>
          <th>Email id</th>
          <th>Mobile No</th>
        </tr>
      </thead>
      <tbody>
        
        {data?
        <><tr>
                      <td>Paper Presentation</td>
                      <td>{data.ppt.map((e) => { return <tr>{e.name}</tr>; })}</td>
                      <td>{data.ppt.map((e) => { return <tr>{e.email}</tr>; })}</td>
                      <td>{data.ppt.map((e) => { return <tr>{e.ph}</tr>; })}</td>
                  </tr><tr>
                          <td>Debug</td>
                          <td>{data.debug.map((e) => { return e.name; })}</td>
                          <td>{data.debug.map((e) => { return e.email; })}</td>
                          <td>{data.debug.map((e) => { return e.ph; })}</td>
                      </tr>
                      <tr>
                      <td>Technical Mime</td>
                      <td>{data.t_mime.map((e) => { return <tr>{e.name}</tr>; })}</td>
                      <td>{data.t_mime.map((e) => { return <tr>{e.email}</tr>; })}</td>
                      <td>{data.t_mime.map((e) => { return <tr>{e.ph}</tr>; })}</td>
                  </tr>
                  <tr>
                      <td>Technical Quiz</td>
                      <td>{data.t_quiz.map((e) => { return <tr>{e.name}</tr>; })}</td>
                      <td>{data.t_quiz.map((e) => { return <tr>{e.email}</tr>; })}</td>
                      <td>{data.t_quiz.map((e) => { return <tr>{e.ph}</tr>; })}</td>
                  </tr>
                  <tr>
                      <td>Short Film</td>
                      <td>{data.short.map((e) => { return <tr>{e.name}</tr>; })}</td>
                      <td>{data.short.map((e) => { return <tr>{e.email}</tr>; })}</td>
                      <td>{data.short.map((e) => { return <tr>{e.ph}</tr>; })}</td>
                  </tr>
                  <tr>
                      <td>Meme</td>
                      <td>{data.meme.map((e) => { return <tr>{e.name}</tr>; })}</td>
                      <td>{data.meme.map((e) => { return <tr>{e.email}</tr>; })}</td>
                      <td>{data.meme.map((e) => { return <tr>{e.ph}</tr>; })}</td>
                  </tr>
                  <tr>
                      <td>E-Poster</td>
                      <td>{data.e_poster.map((e) => { return <tr>{e.name}</tr>; })}</td>
                      <td>{data.e_poster.map((e) => { return <tr>{e.email}</tr>; })}</td>
                      <td>{data.e_poster.map((e) => { return <tr>{e.ph}</tr>; })}</td>
                  </tr>
                  <tr>
                      <td>E-Adversment</td>
                      <td>{data.e_ads.map((e) => { return <tr>{e.name}</tr>; })}</td>
                      <td>{data.e_ads.map((e) => { return <tr>{e.email}</tr>; })}</td>
                      <td>{data.e_ads.map((e) => { return <tr>{e.ph}</tr>; })}</td>
                  </tr>
                      </>
      :null}
         
       
        
      </tbody>
    </Table>
    </div>
  );
}

export default View;