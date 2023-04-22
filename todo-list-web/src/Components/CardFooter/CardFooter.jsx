import React from "react";
import { useStyles } from "./CardFooterStyles";

const CardFooter = (prop) =>{
  const { pageInfo } = prop;

  const classes = useStyles();

  return(
    <div className={classes.card}>
      <span>Concluídas 1/2</span>      
      <button className={classes.deleteListButton}>
        <img 
          className={classes.deleteListImg} 
          src="https://i.ibb.co/R2wYWpH/delete-List-IMG.png" 
          alt="del"/>
      </button>
    </div>    
  );
}

export default CardFooter;