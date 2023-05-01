import React from "react";
import InputElement from "../InputElement";
import { useStyles } from "./PageHeaderStyles"
import Avatar from "../Avatar/Avatar";
import useAuth from "../../Hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";


const PageHeader = (props) => {
  const { signOut } = useAuth();
  const classes = useStyles();
  const navigate = useNavigate();

  const signOutEvent = () => {


    setTimeout(()=>{
      signOut();
      navigate("/");
    },2000);
  }
  
  return (
    <header className={classes.headerPage}>
      <Avatar name="Werik" onClick={signOutEvent}/>
      <h1 className={classes.title}>{props.title}</h1>       
      <InputElement placeholder="type a text here.."/>
      {/*<a href="/" onClick={signOut}>Sign out</a>*/}
    </header>    
  );
};

export default PageHeader;