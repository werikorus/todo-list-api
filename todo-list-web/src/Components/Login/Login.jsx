import React from "react";
import InputElement from "../InputElement";
import { Main, LoginArea, ButtonsArea } from "./LoginStyles";
import Goto from '../Goto';


const Login = () =>{
  return(
    <Main>
      <LoginArea>
        <h2>Ralize o Login</h2>
        <InputElement placeholder="E-mail"/>
        <InputElement placeholder="Password"/>

        <ButtonsArea>
          <Goto txt="Login" destine="/Home"/>
          <Goto txt="Cadastro" destine="/Subscribe"/>      
        </ButtonsArea>             
      </LoginArea>     
    </Main>
  );
};

export default Login;
