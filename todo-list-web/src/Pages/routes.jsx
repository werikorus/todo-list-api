import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./Landing";

const Rotas = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/" exact element = {<Landing />}/>
      </Routes>
    </Router>
  )
};

export default Rotas;