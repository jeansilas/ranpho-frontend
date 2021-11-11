import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import { Link } from 'react-router-dom';
import axios from "axios";


export default function Album(props) {
  const [color, setColor] = useState("");

  const getColor = () => {
    let arr = ["#CABAC8", "#FFCB77", "#92EBCD", "#95D9DA", "#E5A4CB", "#037971", "#EFC88B", "#EFAAC4"];
    setColor(arr[Math.floor(Math.random() * arr.length)]);
    console.log(color)
  };

  useEffect(() => {
    getColor();
  }, []);

  const style = {backgroundColor: `${color}`};

  return (
    <div className="album-card">
     
      <div className="contorno-album">
        
        <div className="album-content"> 
          <div className="album-color" style={style}>  
                
          </div>          
          <div className="link">
            <Link className="album-title" to = {`/albums/${props.src}`}>{props.src}</Link>
          </div>
        </div>
      
      </div>
    
    </div>
  );
}