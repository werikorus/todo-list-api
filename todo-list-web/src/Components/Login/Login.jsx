import React, { useEffect } from "react";
import Goto from '../Goto';
import { FaLock } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { clientId, onSuccess, onFailure } from "./logic/login";
import { gapi } from "gapi-script";
import { linkLoginImage } from "../../Helper/Helper";
import { useStyles } from "./LoginStyles";

const Login = () =>{
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }

    gapi.load('client:auth2', start);
  });

  const classes = useStyles();

  return(
    <main className={classes.main}>
      <div className={classes.divArea}>
        <img className={classes.divImage} src={linkLoginImage}/>
        <div className={classes.loginArea}>
          <h2 className={classes.title}>Your To Do List</h2>
          <hr className={classes.line}/>
          <span className={classes.subtitle}>Log in to your account</span>

          <div className={classes.inputArea}>
            <FaUser color={"var(--color-header-background)"}/>
            <input className={classes.inputLogin} id="loginInput" type="text" placeholder="email"/>
          </div>

          <div className={classes.inputArea}>            
            <FaLock color={"var(--color-header-background)"}/> 
            <input className={classes.inputLogin} id="passwordInput" type="password" placeholder="Password"/>
          </div>
          
          <div className={classes.buttonsArea}>
            <Goto txt="Login" destiny="/Home"/>
            <Goto txt="Sign Up" destiny="/Subscribe"/>      
          </div>       
                
          {/*<GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            style={{"backgroundColor": "black"}}
          />*/}
        </div>
      </div>            
    </main>
  );
};

export default Login;
