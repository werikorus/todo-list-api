import React  from "react";
import Login from "../../Components/Login";
import { useStyles } from "./LandingStyles";

const Landing = () => {
  const classes = useStyles();

  return(
    <main className={classes.main}>
      <Login />
    </main>    
  );
}

export default Landing;
