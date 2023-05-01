import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./Landing";
import Home from "./Home";
import Subscribe from "./Subscribe";
import PageNotFound from "./PageNotFound/PageNotFound";

const Private = ({ Item }) => {
  const signed = false;
  return signed > 0 ? <Item /> : <Home />
}

const Rotas = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element = {<Landing />}/>
        {/*<Route path="/Home" exact element = {<Home />}/>*/}
        <Route exact path="/home" element = {<Private Item={Home} />}  />
        <Route path="/Subscribe" exact element = {<Subscribe />}/>
        <Route path="*" exact element ={<PageNotFound />}/>        
      </Routes>
    </Router>
  );
};

export default Rotas;