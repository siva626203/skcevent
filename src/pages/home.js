/* eslint-disable @next/next/no-img-element */
import { React,Fragment, useEffect, useState } from 'react'
// import Footer from './component/footer';
import { useSelector, useDispatch } from 'react-redux';
// import { logout,login } from '../features/user';
// import "../css/scrollani.css"
// import "../animation/ani.js"
import { SocialIcon } from 'react-social-icons';
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
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
          src="https://i.ibb.co/VQgJCTY/IMG-20221226-125955.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://i.ibb.co/mSY62vM/IMG-20221226-125941.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://i.ibb.co/gwJCN0W/IMG-20221226-115905.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded img-fluid"
          src="https://live.staticflickr.com/65535/52678496194_9c01d6b7bf_c.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded img-fluid"
          src="https://live.staticflickr.com/65535/52678707533_47ce66fac1_c.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://live.staticflickr.com/65535/52678210626_53b96f0286_c.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://live.staticflickr.com/65535/52680378960_8fb5154f8c_b.jpg"
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
    {/* <div className='text-center mt-5'>
    <iframe  width="560" height="315" src="https://www.youtube.com/embed/y5ejc8B7Vg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div> */}
    
    <br/>
    <br/>
    <img
          className="d-block w-100 rounded"
          src="https://i.ibb.co/LCgsgcW/Untitledimage.png"
          alt="Third slide"
        />
     <img className="d-block w-100 rounded" src="https://i.ibb.co/Q8p2L81/IMAGE1.png" alt="IMAGE1"/>
     
    <Container>
      <Row className="">
        <Col><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15739.736021220891!2d77.833456!3d9.5144635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7950cd841f0a4567!2sSri%20Kaliswari%20College!5e0!3m2!1sen!2sin!4v1675400292121!5m2!1sen!2sin" width="300" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Col>
        <Col><h3 className="text-bottom">INFOSEA 2K23</h3><p className="address">Sri Kaliswari College ,<br/>Virudhunagar Main Road,<br/> Sivakasi, Tamil Nadu 626123</p></Col>
        <Col><p className='social'><h3 className='text-bottom'>Social Media Links</h3></p><br/><SocialIcon className='ms-2' fgColor="white"  url="https://instagram.com/infosea2023"/><SocialIcon className='ms-2' fgColor="white"  url="mailto:skcitinfoesa2023@gmail.com"/><SocialIcon className="ms-2" fgColor="white"  url="https://youtube.com/@informationtechnologyskc7277"/></Col>
      </Row>
      </Container>
    <br/>
    </div>
}
export default Homepage;