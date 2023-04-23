import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./Landing";
import Home from "./Home";
import Subscribe from "./Subscribe";
import PageNotFound from "./PageNotFound/PageNotFound";


const Rotas = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/" exact element = {<Landing />}/>
        <Route path="/Home" exact element = {<Home />}/>
        <Route path="/Subscribe" exact element = {<Subscribe />}/>
        <Route path="*" exact element ={<PageNotFound />}/>        
      </Routes>
    </Router>
  );
};

export default Rotas;