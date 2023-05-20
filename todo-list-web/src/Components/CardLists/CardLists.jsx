import React  from "react";
import { useStyles } from "./CardListsStyles";

const CardLists = (prop) =>{
  const { id, title } = prop; 

  const classes = useStyles();
  const handleGetTasks = () => {
    alert(`Id: ${id}`);
    return [];
  }
 
  return(
    <li id={`${id}`} key={id} className={classes.card} onClick={handleGetTasks}>
      <h2>{title}</h2>
    </li>     
  );
}

export default CardLists;
