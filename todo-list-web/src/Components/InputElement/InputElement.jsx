
import React, { useState } from "react";
import { useStyles } from "./InputElementStyles";
import { useAuthContext, useListsContext, useTasksContext } from "../../Hooks";


const InputElement = (props) =>{
 const classes = useStyles();
 const [ decriptionTask, setDescriptionTask ] = useState();
 const { currentListId } = useListsContext();
 const { user } = useAuthContext();
 const { setNewTask, setLoading } = useTasksContext();
  
 const saveNewtask = async () => {  
    if(decriptionTask===""){
      alert('Type your task before saving!');
    }

    const userId = user.given_name;

    const newTask = {    
      idList: currentListId,
      idUser: userId,
      descriptionTask: decriptionTask,
      done: true,
      dateCreate: new Date(),
      dateUpdate: new Date(),
    };
    
    setLoading(true);
    await setNewTask(newTask);
    setLoading(false);
  }

  const {placeholder} = props
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
