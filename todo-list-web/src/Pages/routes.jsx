import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./Landing";
import Home from "./Home";

const Rotas = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/" exact element = {<Landing />}/>
        <Route path="/Home" exact element = {<Home />}/>
      </Routes>
    </Router>
  )
};

export default Rotas;