import React from "react";
import { useState } from "react";
import "./index.css";



export default function Formulario(props){
  const [search, setSearch] = useState({text: ''});

  const searchChanged = (event) => {
    setSearch({ text: event.target.value })
  };

  const send = (event) => {
    event.preventDefault();
    props.onSubmitFormulario(search.text);
    
  };

  return (
      <form className="form-card" onSubmit={send}>
          <input
          className="form-input"
          type="text"
          name="pesquisar"
          placeholder="Escreva um tema de imagem =)"
          value={search.text}
          onChange ={searchChanged}
          />
          <button className="btn" type="submit">Pesquisar</button>
      </form>
  );
}
