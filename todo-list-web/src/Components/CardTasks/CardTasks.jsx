import React from "react";
import { useStyles } from "./CardTasksStyles";
import { useTasksContext } from "../../Hooks";

const CardTasks = (item, key, index) => {
  const classes = useStyles();
  const { 
    deleteCurrentTask, 
    setCurrentTaskId,    
    setTaskDone, 
    tasks 
  } = useTasksContext();

  const task = item.item;

  const handleDelete = async () => {      
    setCurrentTaskId(task.id);
  
    if(window.confirm('Have you sure you want to delete this task?')){
      const taskIndex = tasks.indexOf(tasks.find(x => x.id === task.id));
      tasks.splice(taskIndex, 1);
      await deleteCurrentTask(task.id);
    };
  };

  const handleDoneTask = async () => {
    setCurrentTaskId(task.id);
    let label = document.getElementById(`label-${task.id}`);

    if(await setTaskDone(task)){
      if(label.style.textDecorationLine === '' || label.style.textDecorationLine === 'none'){
        label.style.textDecorationLine = 'line-through';
        label.style.fontStyle = 'italic';
        label.style.opacity = 0.5;
      } else {
        label.style.textDecorationLine = 'none';
        label.style.fontStyle = 'normal';
        label.style.opacity = 1;
      };
    };
  }

  return (  
    <li id={task.id} key={`${key-index}`} className={classes.items}> 
      <input 
        className={classes.input}
        name="checkItem"
        type="checkbox"        
        onChange={() => handleDoneTask()}
      />
      <label id={`label-${task.id}`}>{task.descriptionTask}</label>
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
