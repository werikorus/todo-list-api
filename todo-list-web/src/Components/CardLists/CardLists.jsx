import React  from "react";
import { useStyles } from "./CardListsStyles";
import { useListsContext } from "../../Hooks";

const CardLists = (prop) => {
  const { id, title } = prop; 

  const {     
    setCurrentListId,
    setLoading,
  } = useListsContext();

  const classes = useStyles();
  
  const handleGetTasks = async () => {    
    setLoading(true);        
    await setCurrentListId(id);            
    setLoading(false);            
  }
 
  return(
    <li id={`${id}`} key={id} className={classes.card} onClick={handleGetTasks}>
      <h2>{title}</h2>
    </li>     
  );
}

export default CardLists;
