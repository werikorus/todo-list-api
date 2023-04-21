import React  from "react";
import { useStyles } from "./CardListsStyles";

const CardLists = (prop) =>{
  const classes = useStyles();
  
  return(
    <div className={classes.card} onClick={prop.getTasks}>
      <h2>{prop.title}</h2>
    </div>     
  );
}

export default CardLists;