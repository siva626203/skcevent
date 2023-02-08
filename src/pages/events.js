/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Events=(props)=> {
    return (
        <div>
            <div className=''>
            <Header/>
            <h1 className='event-text-1'>Events</h1>
            <div className='carditems'>
                <Container>
            <Row className="justify-content-md-center">
        <Col xs lg="3">
        <div className='card1'></div>
        </Col>
        <Col xs lg="3"><div className='card2'></div></Col>
        <Col xs lg="3">
        <div className='card3'></div>
        </Col>
        </Row>
        </Container>

        <Container>
            <Row className="justify-content-md-center">
        <Col xs lg="3">
        <div className='card4'></div>
        </Col>
        <Col xs lg="3"><div className='card5'></div></Col>
        <Col xs lg="3">
        <div className='card6'></div>
        </Col>
        </Row>
        </Container>
        <Container>
            <Row className="justify-content-md-center">
        <Col xs lg="3">
        <div className='card7'></div><p className='e-ads'>E Advertisement Sample Video -<a className='yt-link1' href='https://youtu.be/y5ejc8B7Vg0' target="_blank" rel="noreferrer"> Click Here</a> </p>
        </Col>
        <Col xs lg="3"><div className='card8'></div></Col>
        </Row>
        </Container>
            {/* <img className='card1' src="https://i.ibb.co/nLHfsZ1/card1.png"/>
            <img className='cardback1' src="https://i.ibb.co/93W0vm0/cardback1.png" alt="cardback1" />
            <img className='card2' src="https://i.ibb.co/Nn5wWnS/card2.png"/>
            <img  className='cardback2'src="https://i.ibb.co/tzZvCDh/cardback2.png" alt="cardback2" />
            <img className='card3' src="https://i.ibb.co/wgzvTyM/card3.png"/>
            <img className='cardback3' src="https://i.ibb.co/V9BmN5j/cardback3.png" alt="cardback3" />
            <img className='card4' src="https://i.ibb.co/xsqX762/card4.png"/>
            <img className='cardback4' src="https://i.ibb.co/j3SF6vw/cardback4.png" alt="cardback4" />
            <img className='card5' src="https://i.ibb.co/HzFzQqY/card5.png"/>
            <img className='cardback5' src="https://i.ibb.co/PQ1NYsB/cardback5.png" alt="cardback5" />
            <img className='card6' src="https://i.ibb.co/w09C5p5/card6.png"/>
            <img className='cardback6' src="https://i.ibb.co/t3rmXxC/cardback6.png" alt="cardback6" />
            <img className='card7' src="https://i.ibb.co/yyNPnVp/card7.png"/>
            <img className='cardback7' src="https://i.ibb.co/sFTYpsL/cardback7.png" alt="cardback7" />
            <img className='card8' src="https://i.ibb.co/XWx8dGd/card8.png"/>
            <img className='cardback8' src="https://i.ibb.co/RzyczZ8/cardback8.png" alt="cardback8" /> */}
            </div>
    </div>
            <Footer/>
        </div>
    );
}

export default Events;