import React from "react";
import { useStyles } from "./CardTasksStyles";

const CardTasks = (item, key, idItem) => {
  const classes = useStyles();

  const handleDelete = () =>{
    window.alert(`Not implemented yet: \n ${item.item} \n ${idItem}`);
  }

  return (  
    <li className={classes.items} key={key}> 
      <input className={classes.input} type="checkbox"/>
      <label>{item.item}</label>
      <button className={classes.button} onClick={handleDelete}>
        <img 
          className={classes.delImg}
          src="https://i.ibb.co/LDTwxn0/delete-IMG.png" 
          alt="del"
        />
      </button>
    </li>
  );
};

export default CardTasks;