import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import Home from "./Home";
import Albums from "./Albums";
import PhotoAlbum from "./PhotoAlbum";

const Rotas = () => {
   return(
        <Router>
            <Routes>
                <Route element = { <Home/> }  path="/" exact />
                <Route element = { <Albums/> }  path="/albums" exact />
                <Route element = {<PhotoAlbum/>} path="/albums/:album_title"/>
            </Routes>
        </Router>
   );
}

export default Rotas;