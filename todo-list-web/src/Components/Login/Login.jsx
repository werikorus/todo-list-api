import React from "react";
import Goto from '../Goto';
import { FaLock } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
//import './../../../public/assets/home_img.avif';

import {
  Main, 
  DivArea, 
  LoginArea, 
  InputArea,
  ButtonsArea,
  InputLogin,   
  DivImage } from "./LoginStyles";

const Login = () =>{
  return(
    <Main>
      <DivArea>
        <DivImage src="https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
        <LoginArea>
          <h2>Your To Do List</h2>
          <span>Log in to your account</span>

          <InputArea>
            <FaUser/>
            <InputLogin id="loginInput" type="text" placeholder="email"/>
          </InputArea>

          <InputArea>            
            <FaLock/> 
            <InputLogin id="passwordInput" type="password" placeholder="Password"/>
          </InputArea>
          
          <ButtonsArea>
            <Goto txt="Login" destine="/Home"/>
            <Goto txt="Sign Up" destine="/Subscribe"/>      
          </ButtonsArea>             
        </LoginArea>     
      </DivArea>
    </Main>
  );
};

export default Login;
