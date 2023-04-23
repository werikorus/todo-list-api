import React from "react";
import { useStyles } from "./SubscribeStyles"
import InputDefault from "../../Components/InputDefault/InputDefault";

const Subscribe = () => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <div className={classes.subscribeArea}>
        <img className={classes.avatarProfile} src="https://avatars.githubusercontent.com/u/50995153?v=4" alt="profile" /> 
        <form onSubmit="return false;">
          <InputDefault  placeholder="nome"/>
          <InputDefault  placeholder="email"/>
          <InputDefault  placeholder="password"/>          
        </form>     
      </div>      
    </main>
  );
}

export default Subscribe;