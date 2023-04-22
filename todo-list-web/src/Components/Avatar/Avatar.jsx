import React from "react";
import { useStyles } from "./Avatar.styles";

const Avatar = (prop) => {
  const classes = useStyles();
  const { name } = prop

  return(
    <div className={classes.divPhoto}>
      <img 
        className={classes.img}
        alt="perfil" 
        src="https://avatars.githubusercontent.com/u/50995153?v=4"         
      /> 
      <div className={classes.nameAvatar}>
        <span>{name} | </span>
        <a href="/">Sign out</a>  
      </div>         
    </div>    
  );
};

export default Avatar;
