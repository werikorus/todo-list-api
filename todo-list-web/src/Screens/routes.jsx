import React from 'react';
import { Home } from './Home/Index';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} /> 
      </Routes>
    </Router>
  );
};

export default Rotas;
