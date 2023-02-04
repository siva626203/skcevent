/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Activitys=(props)=> {
    return (
        <div>
            <div className=''>
            <Header/>
            <h1 className='event-text'>Events</h1>
            <div className='carditems'>
            <img className='card1' src="https://i.ibb.co/nLHfsZ1/card1.png"/>
            <img className='card2' src="https://i.ibb.co/Nn5wWnS/card2.png"/>
            <img className='card3' src="https://i.ibb.co/wgzvTyM/card3.png"/>
            <img className='card4' src="https://i.ibb.co/xsqX762/card4.png"/>
            <img className='card5' src="https://i.ibb.co/HzFzQqY/card5.png"/>
            <img className='card6' src="https://i.ibb.co/w09C5p5/card6.png"/>
            <img className='card7' src="https://i.ibb.co/yyNPnVp/card7.png"/>
            <img className='card8' src="https://i.ibb.co/XWx8dGd/card8.png"/>
            </div>
    </div>
            <Footer/>
        </div>
    );
}

export default Activitys;