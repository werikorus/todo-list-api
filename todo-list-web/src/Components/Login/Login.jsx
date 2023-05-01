import React, { useEffect, useState } from "react";
import Goto from '../Goto';
import { FaLock } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { clientId, onSuccess, onFailure } from "./logic/login";
import { gapi } from "gapi-script";
import { linkLoginImage } from "../../Helper/Helper";
import { useStyles } from "./LoginStyles";
import ButtonAction from '../ButtonAction';
import { login } from "../../Services/UserAPI";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const Login = () =>{
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError ] = useState('');
  
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }

    gapi.load('client:auth2', start);
  },[]);

  const handleLogin = async () => {
    if(!email || !password){      
      notifyFail("All fields is required!");
      return;
    }

    setLoading(true);

    const user = {
      email: email,
      password: password
    }

    const res = await signIn(user.email, user.password);    

    if(res!==undefined){
      notifyFail(res);
      return;
    };

    setLoading(false);
    navigate("/Home");
  };

  const notifyFail = (message) => toast.error(`Login fail: ${message}`, {    
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  
  const classes = useStyles();

  const handleSubscribePage = () => {
    navigate("/Subscribe");
  };

  return(
    <main className={classes.main}>
      <div className={classes.divArea}>
        <img className={classes.divImage} src={linkLoginImage} alt="loading"/>
        <div className={classes.loginArea}>
          <h2 className={classes.title}>Your To Do List</h2>
          <hr className={classes.line}/>
          <span className={classes.subtitle}>Log in to your account</span>

          <div className={classes.inputArea}>
            <FaUser color={"var(--color-header-background)"}/>
            <input 
              className={classes.inputLogin} 
              id="loginInput" 
              type="text" 
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={classes.inputArea}>            
            <FaLock color={"var(--color-header-background)"}/> 
            <input 
              className={classes.inputLogin} 
              id="passwordInput" 
              type="password" 
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className={classes.buttonsArea}>
            <ButtonAction txt="Login" clickEvent={handleLogin}/>
            <ButtonAction txt="Sign Up" clickEvent={handleSubscribePage} />      
          </div>
          <div>             
            <ToastContainer />
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
