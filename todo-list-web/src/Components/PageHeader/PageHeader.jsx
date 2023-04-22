import React from "react";
import InputElement from "../InputElement";
import { gapi } from "gapi-script";
import { useStyles } from "./PageHeaderStyles"


const PageHeader = (props) => {
  const classes = useStyles();

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
  
  return (
    <header className={classes.headerPage}>
      <h1 className={classes.title}>{props.title}</h1>       
      <InputElement placeholder="type a text here.."/>
      {/*<a href="/" onClick={signOut}>Sign out</a>*/}
    </header>    
  );
};

export default PageHeader;