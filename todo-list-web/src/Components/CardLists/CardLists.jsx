import React  from "react";
import { useStyles } from "./CardListsStyles";

const CardLists = (prop) =>{
  const { getTasks } = prop; 

  const classes = useStyles();

  const handleTest = ()=>{
    console.log('Teste!')
  }
  
  return(
    <li className={classes.card} onClick={getTasks}>
      <h2>{prop.title}</h2>
    </li>     
  );
}

export default CardLists;