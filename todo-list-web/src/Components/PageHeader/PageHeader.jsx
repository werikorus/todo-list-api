import React from "react";
import InputElement from "../InputElement";
import { useStyles } from "./PageHeaderStyles"
import Avatar from "../Avatar/Avatar";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

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

  const  { user } = useAuth();
  
  return (
    <header className={classes.headerPage}>
      <Avatar name={user?.unique_name} onClick={signOutEvent}/>
      <h1 className={classes.title}>{props.title}</h1>       
      <InputElement placeholder="type a text here.."/>
    </header>    
  );
};

export default PageHeader;