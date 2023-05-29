import React from "react";
import { useStyles } from "./CardTasksStyles";
import { useTasksContext } from "../../Hooks";

const CardTasks = (item, key, index) => {
  const classes = useStyles();
  const { deleteCurrentTask, setCurrentTaskId } = useTasksContext();
  const task = item.item;

  const handleDelete = async () => {    
    await setCurrentTaskId(task.id);    
    console.log('Current Task ID: ', task.id);
    await deleteCurrentTask();
  }
  const handleDoneTask = async () => {
    const taskItem = document.getElementById(task.id);    
    console.log(`Task: ${taskItem.value}`);    
    //setCurrentTaskId(task.id);
    
    //await setTaskDone();
   }

  return (  
    <li 
      id={task.id}
      key={key}       
      className={classes.items}      
    > 
      <input 
        className={classes.input}
        name="checkItem"
        type="checkbox"
        checked={task.done}
        onChange={handleDoneTask}        
      />
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
