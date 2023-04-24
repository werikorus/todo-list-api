import React from "react";
import { useStyles } from "./SubscribeStyles"
import InputDefault from "../../Components/InputDefault/InputDefault";
import ButtonAction from "../../Components/ButtonAction/ButtonAction";
import PageHeader from "../../Components/PageHeader/PageHeader";

const Subscribe = () => {
  const classes = useStyles();
  return (
    <body className={classes.body}>      
      <main className={classes.main}>
        <section className={classes.section}>
          <img 
            className={classes.avatarProfile} 
            src="https://avatars.githubusercontent.com/u/50995153?v=4" 
            alt="profile" 
          /> 
          <div className={classes.subscribeArea}>
            <form onSubmit="return false;" className={classes.form}>
              <InputDefault  placeholder="Name" width= '20rem'/>
              <InputDefault  placeholder="email" width= '30rem'/>
              <InputDefault  placeholder="Password"/>          
              <InputDefault  placeholder="Phone Number"/>
              <InputDefault  placeholder="Role"/>  
            </form> 
            <div className={classes.buttonArea}>
              <ButtonAction  txt="Cancel"/>    
              <ButtonAction txt="Subscribe"/>    
            </div>          
          </div>      
        </section>
      </main>
    </body>  
  );
}

export default Subscribe;