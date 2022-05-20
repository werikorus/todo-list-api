import React from "react";
import InputElement from "../InputElement";
import ButtonAction from "../ButtonAction";
import { Main, LoginArea, ButtonsArea } from "./LoginStyles";
import Goto from "../Goto";


const handleLogin = () =>{
};

const handleCadastro = () => {
  alert("Cadastro!");
}

const Login = () =>{
  return(
    <Main>
      <LoginArea>
        <h2>Ralize o Login</h2>
        <InputElement placeholder="E-mail"/>
        <InputElement placeholder="Password"/>

        <ButtonsArea>
          <ButtonAction 
            txt="Login" 
            clickEvent={handleLogin}
          />
          
          <ButtonAction 
            txt="Cadastro" 
            clickEvent={handleCadastro}
          />
          <Goto txt="Loga"/>          
        </ButtonsArea> 
            
      </LoginArea>     
    </Main>
  );
};

export default Login;
