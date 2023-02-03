/* eslint-disable @next/next/no-img-element */
import { React,Fragment, useEffect, useState } from 'react'
// import Footer from './component/footer';
import { useSelector, useDispatch } from 'react-redux';
// import { logout,login } from '../features/user';
// import "../css/scrollani.css"
// import "../animation/ani.js"
import axios from 'axios'
// import Img1 from '../images/img1.png'
import AwesomeSlider from 'react-awesome-slider';
import I1 from "../../image/1.jpg"
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
      <div className='text-center'>
      <h1 className=''>SRI KALISWARI College(Autonomous),Sivakasi</h1>
      <h2 className=''>DEPARTMENT OF INFORMATION TECHNOLOGY</h2>
      <h2 className=''>INFOSEA 2K23</h2>
      </div>
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://lh3.googleusercontent.com/Tvp0gLZL3z20vR5kJ4o8VGUj_yxyrPWlzBo_tkrO1OR3ZIcNNcbOHrCKC7YILIvDGmR3IqxldBN56c0oiKdQ0_17BQtQ4lqVkZr8l1LbEVN7hu5ybPOEtwzZvL8lfU9rTPJogJyQyfdpwyB4iDckDzmZhWMZm5VBjIbwznAIw6jbh9UWG1IMfBUNpvOEo47wEyKCz4AlwCQ5IU917GkpuBm0cNrBo1Hn3VSNMVTimOs-AK6X9MOgyqUu5N5ll9E8NYqlWNnZWPujrzUTLH9lxNNhL8jgxyBHHF5wvSR-ljO0u4ITpFn3sS3u72b_Rn4o7aUvg8EG0DTqCqCmyV-55-D5_VyIcEolCgzoUaL316yKFko-EUZri7iRt9wDZmEfJyOtWAKmTheHDbxRd-OluMeW-BvN4VsebsOiiMBsp50bw7M0iJRxvUSVChgFGIxdWyPebJKcGVIS9-7B5xtw-MquYrhUh4HwFySc6wZVu_yB2QbvLK672zQwpRVMkpoFk6fo2ans7sLqLoB7zzWhMf_gIFKeGHFjPMCjcKgMzTTsedNqQpZj3TYsBb6HmZfNNljLSdt8Ua2PBmIaFrsfqYkI2DsVWR_UUnQfkh-uJXrX85DFUk6gvd3fgYyP9Q-siUHEwliRh9Oc6H6o6TknYnMtc-14pMQVV2zhR-Xb7Dy0nB8Lj2bk4W-32YcAQS0npbuDxQGQ4lKb9gWXGPxmK1mYljcahRZPR1ZNSQrvSezpeZlLnUhzAHfzFS9S6SpuB91W3oo_BWhGQfi089j5_UzZjNKsN6DTZ4jhDNAEkskVd1LBay9AawhVrq6asU6V2o87Fn-flWJGFt_hWeNrkPX_0Fxd0aKOWpbUhMKablhsC2jkDRdzZVAmUbUpMlw2Nmb2BHybKLAWLU8Cc4rSjNyB-wTZlg7Cz79AByECRUS6sUjk-gi-FCJkANDbVxeq7Esk8DdIEiyvX1RZ7Bwt2-SU4zPcmQT1uwW_knuA6cIgS9QXm5Yu=w1244-h933-no?authuser=0"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://lh3.googleusercontent.com/2_FvPRQP3jlN-xCUuFQ9wc1NjLTrc0vdiLdGjo3H5PODlvsgH8imDiWcc4noquD5tEj17fARjYTMJ4YiF6izYNUsXocFAaTymwFyHG2ZgIEBas21sG8rrZ0PCexG-3o_Y2e_kx_VJ_ymwSnO0bOv2neCtLFS7ApUGXwdG_ihEvBp4qI7muI72b2SEBQoq2mz9dZEfsPHbWyDSSYjoTqtYfWAQOQJ9igSUrj3oR_PApovoKn0Qu0G62bhR18_tt-wNdAKjh80PKYPhLxw1LBJAPlDMFnSxMeOw9GDPH9RYKkgZS5_ClWfM5rEO3IcbudmD-1Hz8_fPDUTYSWKGks2qYYC78TUBqtkxHfA1Mc5bv45J8QpdlATvuUlEIJN-9zfMnIyUYkRCJ8x_3dihyeZDUnajBrtFL-AVJp09KbQnwg3rhFWrMiIvFVpCW1qcfSzPqiu8m_POsSJn-hQwsHoB75-AtzJAL2kFIokrCnEQJIPiEz3kZU6tC1p5Y_4EMJm8lecdIUCfWeGoqBiS-cLE8yO6E5MQ7pJPHsMPs16D9CVqbgIpcInTYMz_ejiBrffXK-S7oXX4IbX0YCbpSz2JaOauNKmLL8EjSGkVfPug3m1xpCAcLx7UKlaTWpwo3HnLIzqo08GgXMdr1vTZltIUJ_E7ov34bOOCJQDyU1bUJnJ2XVZfWJrcOdl2kFDXWGUr0uTxhz9X5wvpExb-I2J2-eu2NQA63N4GJ6d_Tyl2HrM8cSRijocU5Gdd8LKD4ZuzNDg7ghqJN0zaS0tAIxcFj6BECUPkIWtR45y-MZ7JS5_LpN7p1fcZUwpIVY2tf9BBznk1ts9Wt5jecBA7ivaVIKPITU84qLQxVV1dk-JVMqGRxPZ0DgHOWMJJjuGNcXK9MUKcsKUrOqYLZj8hktKilSK49SgxH-0O5MWQAYbVEJ_fwqiLYmleYGa0yy9s51VRmF7TP_Io-WwGySzExC91aDPpENqmUuHuAZ7edOgf2gesHLKUJ5n=w1244-h933-no?authuser=0"
          alt="Second slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://lh3.googleusercontent.com/s0CxJWK0K2GqsK33whpoIwi08DiDnRDKIdBvbEBy3hhawPjrtApTqz-r0KzqutA36aE2xfadYVGi9yoTWf74QL_cw0mcz405jYuu_Hq2YBic9gPeIU-zmbIz5VvRR68dfLwODwa-JKD7wSO49zSL_jA_Xpmvdds1_HPLYuUhp3ez1X5GqyNUiH7wlYOU72hb7SEbW2o0U2RROLd7KtOIFnfe8gAsy3uUvHhdtgSdsA3ukxuZmPm9qP2IzIqjqWTWV_KHSt6asi0pHHLADWiyqn9BGnuNeg44nFW5inENqseTG_BcQo_MMwYRCNiKChlpSId1jZdmIuvbg4eNUcbq6mgrgaIqMPR81xkpTLEjAUgimrUrACVzVoDuAZ5e6zbuN1mOPtcAoI1c8KbyA7bd4YeQGAG1kH88KOyPYZWtvus2kw-CjXvTERGE-XnOGplEqJjPJa68wh95vg-j8Mfv5UnDivm3AijLsGJNPu67Seo51vYNLQ6M51UYopzvF1AItCy4KaaLRL3f3REg4R55YdXkbJjm-SvBw_tur5mosHJQiOjTW72N6pwgUwpjoH50h1dRg9CihGDMLxQ7HfOfGUOF-UnX6K_RYOaF0UbhSdbpScswuA829vuOTfjMzuGzaV77ZI7L78jCFpEuplRc_Y2XxILATmyLE5yEYM9b1uLvt-BqDoFj8E-Z76yVG9dOUjdAn_PVzLEQewzF3PQgnkY-VZQqWoO5Lre97bC-Bc3H4DmBzOSJlfnCpixCZlTdTxWabzSFdhUCW4XuAIf0TuyEGxUbApmRT-WTGhtGC4etzwx2w-Ymy-LkUSR6wHmg8bpNfoxXkJ-9QJreUtnlwGQ1ixfmi9c0SQayz5MO02PaYyY1seNUTMulCSZpmqd48rzPPAwRqA0hq8HegErAlIR-TZO5nARZhwEUU8qnKMQ8dcHOchGhBbGjvFSUpuoIvRjnscNLveKH83CdSuPyZciOMhoiNWwr90nApKZ6Q2MeLpDDwspF=w1244-h933-no?authuser=0"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    <br/>
    <br/>
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