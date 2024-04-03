
import React, { useState } from "react";
import { useStyles } from "./InputElementStyles";
import { useAuthContext, useListsContext, useTasksContext } from "../../Hooks";


const InputElement = (props) =>{
 const classes = useStyles();
 const [ decriptionTask, setDescriptionTask ] = useState(null);
 const { currentListId } = useListsContext();
 const { user } = useAuthContext();
 const { tasks, setNewTask, setLoading, setCurrentTasks } = useTasksContext();
 const { placeholder } = props

  const userId = user.given_name;
  
  const saveNewtask = async () => {  
    if(decriptionTask===null){
      alert('Type your task before saving!');
      return;
    }

    const newTask = {    
      idList: currentListId,
      idUser: userId,
      descriptionTask: decriptionTask,
      done: true,
      dateCreate: new Date(),
      dateUpdate: new Date(),
    };
    
    setLoading(true);
    const taskCreated = await setNewTask(newTask);
    console.log('Task Created: ', taskCreated || 'Sem retorno');
    setCurrentTasks([...tasks, newTask]);
    setLoading(false);
  }
  
  return (
    <div className={classes.form}>
      <input 
        className={classes.input} 
        placeholder={placeholder}         
        onChange={(e) => setDescriptionTask(e.target.value)}
      />
      <button className={classes.addButton} onClick={saveNewtask}>
        <img 
          className={classes.addImg} 
          src="https://i.ibb.co/dcQsdjy/addIMG.png" 
          alt="add" 
        />
      </button>
    </div>    
  );
};

export default InputElement;
