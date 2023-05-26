import React from "react";
import { useStyles } from "./CardTasksStyles";
import { useTasksContext } from "../../Hooks";

const CardTasks = (item, key) => {
  const classes = useStyles();
  const { deleteCurrentTask, setCurrentTaskId } = useTasksContext();
  const task = item.item;

  const handleDelete = () => {    
    setCurrentTaskId(task.id);    
    deleteCurrentTask();
  }

  return (  
    <li className={classes.items} key={key} id={task.id}> 
      <input className={classes.input} type="checkbox" value={task.done}/>
      <label>{task.descriptionTask}</label>
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