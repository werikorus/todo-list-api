import React from "react";
import { useStyles } from "./CardTasksStyles";
import { useTasksContext } from "../../Hooks";

const CardTasks = (item, key, idItem) => {
  const classes = useStyles();
  const { deleteCurrentTask } = useTasksContext();

  return (  
    <li className={classes.items} key={key}> 
      <input className={classes.input} type="checkbox"/>
      <label>{item.item}</label>
      <button className={classes.button} onClick={deleteCurrentTask(idItem)}>
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