import React from "react";
import { useStyles } from "./Avatar.styles";
import { default_img_user } from "../../Helper/Helper";

const Avatar = (prop) => {
  const classes = useStyles();
  const { name, onClick, url_img_user } = prop

  return(
    <div className={classes.divPhoto}>
      <img 
        className={classes.img}
        alt="perfil" 
        src= { default_img_user ? default_img_user : url_img_user }
      /> 
      <div className={classes.nameAvatar}>
        <span>{name} | <a onClick={onClick}>Sign out</a> </span>
        
      </div>       
    </div>    
  );
};

export default Avatar;
