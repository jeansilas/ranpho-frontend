import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import "./index.css";
import axios from "axios";
import "./index.css";


export default function FOTO_ALBUM(props) {

  const params = useParams();
  const history = useNavigate();

  const deleteImg = (event) => {

    axios.delete(`https://stark-island-49610.herokuapp.com/api/delete/pic/${props.id}`).then(
        (response) => {
          console.log(response);
        });
        
        history(`/albums/`);
  };
  
  return (
    <div className="contornoImagem-fotos" id = {props.id}>
      <button className="quit" onClick={deleteImg}>X</button>
      <img className="img-fotos" alt="Doguinho" src={props.src}/>
    </div>
  );
};