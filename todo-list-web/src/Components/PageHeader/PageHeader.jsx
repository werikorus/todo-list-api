import React from "react";
import InputElement from "../InputElement";
import { useStyles } from "./PageHeaderStyles"
import Avatar from "../Avatar/Avatar";
import useAuth from "../../Hooks/useAuth";

const PageHeader = (props) => {
  const { signOut } = useAuth();
  const classes = useStyles();
  const signOutEvent = () => {
    setTimeout(()=>{
      signOut();      
    },2000);
  }
  
  return (
    <header className={classes.headerPage}>
      <Avatar name="Werik" onClick={signOutEvent}/>
      <h1 className={classes.title}>{props.title}</h1>       
      <InputElement placeholder="type a text here.."/>
    </header>    
  );
};

export default PageHeader;