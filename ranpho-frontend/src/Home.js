import Foto from "./components/Foto";
import Formulario from "./components/search-bar";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [imgs, setImgs] = useState([])
  const [resImg, setResImg] = useState([])

  const options = {
    method: 'GET',
    url: 'https://imgur-apiv3.p.rapidapi.com/3/gallery/search/%7Bsort%7D/%7Bwindow%7D/%7Bpage%7D',
    params: {q: 'cat'},
    headers: {
      authorization: 'Bearer fb6021f7fe8869d5b6e00e42d3b517990a2ee225',
      'x-rapidapi-host': 'imgur-apiv3.p.rapidapi.com',
      'x-rapidapi-key': '8458b05074mshb72ebddfd9200dcp106457jsnaf6d3cd33cf6'
    }
  };

  const updateOptions = (text) => {
    options.params.q = text;
    console.log(`As options foram atualizadas para a seguinte string ${text}`);
    getFotos();
  }

  const getFotos = () => {
    axios.request(options).then(
      (response) => setResImg(response.data));
      
      console.log(resImg);
      let imgArray = [];
      let cont = 1;

      for (let data in resImg.data) {
        let imagem = resImg.data[data].images;
        
        for (let inf in imagem){
          let linkImg = imagem[inf].link;
          
          if (!linkImg.includes('.mp4')){
            let objImg = {id: cont, urlImg: linkImg};
            imgArray.push(objImg);
            console.log(imgArray);
            cont += 1;
          };
        };
      };
      setImgs(imgArray);
  };

  useEffect(() => {
    updateOptions();
  }, []);

  return (
    <div className="Body">
      
      <div className="Buttons-bar">
          <div className="img-text">
            <img className="logo" src="/love.png" alt="logo"/>
            <p className="txt-impact">Pesquise, favorite e salve suas fotos favoritas em um  só album</p>
          </div>
          <button className="btn-album">
            <Link className="link-route" to="/albums">Meus Albums</Link>
          </button>
      </div>

      <div className="Forms">
        <Formulario onSubmitFormulario={updateOptions}></Formulario>
      </div>
      <div className="Conjunto-Imagens">
      {
        imgs.map(
      (img) => (
        <Foto key={`foto__${img.id}`} src={img.urlImg}></Foto>))
      }
      </div>
    
    </div>
  );
};

export default Home;