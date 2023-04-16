import React  from "react";
import { useStyles } from "./CardListsStyles";

const CardLists = (prop) =>{
  const classes = useStyles();
  
  return(
    <div className={classes.card} onSubmit={prop.getLists}>
      <h1>{prop.title}</h1>
    </div>     
  );
}

export default CardLists;