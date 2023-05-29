import React from "react";
import InputElement from "../InputElement";
import { useStyles } from "./PageHeaderStyles"
import Avatar from "../Avatar/Avatar";
import { useAuthContext } from "../../Hooks";
import { useNavigate } from "react-router-dom";

const PageHeader = (props) => {
  const { signOut } = useAuthContext();
  const classes = useStyles();
  
  const navigate = useNavigate();

  const signOutEvent =  () => {
    setTimeout(async()=>{
      await signOut();  
      navigate("/");
    },2000);
  }

  const  { user } = useAuthContext();
    
  return (
    <header className={classes.headerPage}>
      <Avatar name={user?.unique_name} onClick={signOutEvent}/>
      <h1 className={classes.title}>{props.title}</h1>       
      <InputElement placeholder="Type a text here.."/>      
    </header>    
  );
};

export default PageHeader;