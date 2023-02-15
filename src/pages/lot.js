/* eslint-disable react/jsx-key */
import axios from "axios";
import { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
function Lot(){
const [URLS,setURLs]=useState([])
useEffect(()=>{
    axios.get("http://localhost:3000/api/image/get")
    .then((res)=>{
        res.data.map((e)=>{setURLs(e.links)})
        
        console.log(res)
    })
},[])
const Gen=()=>{
 const num=Math.floor(Math.random()*URLS.length)
 console.log(num)
}
return(<div className="m">
    <div className="image-lot">
        <Button onClick={e=>Gen()}>Click ME</Button>
        {}
    </div>
</div>)
}
export default Lot;