import React from "react";
import InputElement from "../InputElement";
import { gapi } from "gapi-script";
import { useStyles } from "./PageHeaderStyles"
import Avatar from "../Avatar/Avatar";

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
      <Avatar name="Werik"/>
      <h1 className={classes.title}>{props.title}</h1>       
      <InputElement placeholder="type a text here.."/>
      {/*<a href="/" onClick={signOut}>Sign out</a>*/}
    </header>    
  );
};

export default PageHeader;