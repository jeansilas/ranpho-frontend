import React from 'react';
import axios from "axios";
import { useParams, useHistory } from 'react-router-dom';
import {useState, useEffect} from "react";
import FOTO_ALBUM from './components/Fotos';
import "./PhotoAlbum.css"

export default function PhotoAlbum() {
    const params = useParams();
    const [imgs, setImgs] = useState([]);

    const loadData = () => {
        // Carrega informações de uma nota
        axios
          .get(`https://stark-island-49610.herokuapp.com/api/album/${params.album_title}/`)
          .then((res) =>{
            let imagens = res.data;
            console.log(imagens)
            setImgs(res.data);
          });
    };

    useEffect(() => {
        loadData();
      }, []);
      
    
    return (
        <div className="Body-photos-albums">     
        
            <div className="Buttons-bar">
              <div className="img-text">
                <img className="logo" src="/love.png" alt="logo"/>
                <p className="txt-impact">Pesquise, favorite e salve suas fotos favoritas em um  só album</p>
              </div>
            </div>
        
            <div className="photo-albums">
                {
                  imgs.map(
                    (imagens) => (
                      <FOTO_ALBUM key={`fotos__${imagens.id}`} src={imagens.content}></FOTO_ALBUM> 
                    ))
                }
            </div>
        </div>
    );
}