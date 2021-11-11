import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Album from './components/Album';
import "./Albums.css";

export default function Albums() {
  const [albumName, setAlbumName] = useState([]);

  const loadData = () => {
    axios.get("http://127.0.0.1:8000/api/albums/").then(
      (response) => {
        setAlbumName(response.data);
        console.log(response.data)
      });
  };

  useEffect(() => {
    loadData();
  }, []);
  
  
  return (
    <div className="Body-albums">     
      <div className="Buttons-bar">
        <div className="img-text">
          <img className="logo" src="/love.png" alt="logo"/>
          <p className="txt-impact">Pesquise, favorite e salve suas fotos favoritas em um  só album</p>
        </div>
      </div>

      <div className="Albums">
        {
          albumName.map(
            (album) => (
              <Album key={`album__${album.id}`} src={album.title}></Album> 
            ))
        }
      </div>
    </div>
    );
}