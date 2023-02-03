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
      
      {/* <img
          className="image-icon2"
          src="https://lh3.googleusercontent.com/F86G3LCj_ummVonVs8w69_xcvhuda4DXSnwFdN8e0zg79QJ2HJDGfHbHx-rv0a3L1Ce0pBcAOyQN5AcJjHC-1_I4rEjjL0O2PX5WT6mquTJVP6ZTOWkwfNY41j1Kz92TxBfKxapvYgmQK9cQfFiWDu_W7_L8Vb-HSdTWD7VZ0F07L_zc_hvUHiRR-PQwj6Y81btll2_f2Tm0hjeB7D-u12VkqsXf1wTELmupMYwxzJP15Jl05KecsnNEd0GrMYcK03-uB3O7ewJHifgSanCqdI8_QiNbLUeu03srR3yAQO2ZHhDDeZoLTopWFjNDPBEL3f6Lhhn7EmS40sl-owa6IjrQLAGSi7nZRtSrctW1dksjXwcxieUm57gTyhTBW02T8pHmTdBNyxZ8NCGeGhC4WgrtCE8gypplfEwqGnKokX__5HnTRMC_3tfXkmVI2lYcz85rtXthIUxW0lXesAoEihKQ45CflcG36oc5ALhWNCkILao4p1BFOCrrVyCxd_P-89C-2U4P-jyWBD_fzdQxcmwffPHdD6iC1EFemwhiRzVG5JdbNxYaFjguIVv1VMJPK8kWJR-JcagYorjJDdIh8icKCu6cvN5VeGcWDStFpTMJkWx9ajSH67rHRn5d8kBSQq3jN-hkZ2ZHTRXjbRGD80qtbyQqT-FKRtES4TLQNG3lxjmbSIwh4_OjOvYwowdZXCE5hyMzIV1bOBEOep9Ru-0nKtO7__anqUGyUr1GAKRpqVvQ_kaUu4ppu4pQe_WEHrQhP-DzYG7uOIXdsODO31q_hWtwmt7gJSAeGJiGE5Gn81MeLKEbQ5abFxRM1vNtgVXGXy2FchZYXjOKYKfW6gay7up7W-BOcY45gn5EZLCE-1CSnEQszHll0tuc-jBi-klNVq1tle1lCjSKTRApxQFMfYuLlPo3scyXRvS_XcWyQRX0GNAr6jJBZNh1Ud5T1M0vo2tUQXmNymGgQn-TTwMVEyojM7Biyuunh0bQFmL9VCXwSN1FyQ=w753-h767-no?authuser=0"
        />
      <h1 className='text-center'>SRI KALISWARI College(Autonomous),Sivakasi</h1>
      <h2 className='text-center'>DEPARTMENT OF INFORMATION TECHNOLOGY</h2>
      <h2 className='text-center'>INFOSEA 2K23</h2> */}
      
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