/* eslint-disable @next/next/no-img-element */
import { React,Fragment, useEffect, useState } from 'react'
// import Footer from './component/footer';
import { useSelector, useDispatch } from 'react-redux';
// import { logout,login } from '../features/user';
// import "../css/scrollani.css"
// import "../animation/ani.js"
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Homepage=()=>{
  const dispatch=useDispatch()
  const [name,setUsername]=useState()
  const [email,setEmail]=useState()
  const age=18;
    const user=useSelector(state => state.user.value);
    const register=useSelector(state=>state.register.value)
    return<div className='home'>
      
      <div>
      <img
          className="image-icon1"
          src="https://i.ibb.co/qmWsBbW/Untitled-2.png"
        />
      </div>
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://i.ibb.co/JzkxjB3/IMG-20210918-131719-1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://i.ibb.co/RgFWCwc/20220418-23040-PMBy-GPSMap-Camera.jpg"
          alt="Second slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://i.ibb.co/wC9v3vr/20220407-114417-AMBy-GPSMap-Camera.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <br/>
    <br/>
    <img
          className="d-block w-100 rounded"
          src="https://i.ibb.co/LCgsgcW/Untitledimage.png"
          alt="Third slide"
        />
    <Container>
      <Row className="">
        <Col><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15739.736021220891!2d77.833456!3d9.5144635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7950cd841f0a4567!2sSri%20Kaliswari%20College!5e0!3m2!1sen!2sin!4v1675400292121!5m2!1sen!2sin" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Col>
        <Col><p className="address">Sri Kaliswari College ,<br/>GR7M+Q9P,<br/>Virudhunagar Main Road,<br/> Sivakasi, Tamil Nadu 626123</p></Col>
      </Row>
      </Container>
    <br/>
    </div>
}
export default Homepage;