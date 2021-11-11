import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import Home from "./Home";
import Albums from "./Albums"
;
const Rotas = () => {
   return(
        <Router>
            <Routes>
                <Route element = { <Home/> }  path="/" exact />
                <Route element = { <Albums/> }  path="/albums" exact />
            </Routes>
        </Router>
   );
}

export default Rotas;