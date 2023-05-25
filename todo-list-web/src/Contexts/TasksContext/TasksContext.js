import React, { createContext, useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { getTasksByListIdAndUserId, setNewTask, deleteTask } from "../../Services/Tasks/TasksService";
import { useAuthContext } from "../../Hooks";
import { useListsContext } from "../../Hooks";

export const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
  const [currentTasks, setcurrentTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ currentTaskId, setCurrentTaskId ] = useState('');
    
  const list = useRef([]);

  const { user } = useAuthContext();
  const userId = user.given_name;

  const { currentListId } = useListsContext();

  useEffect(() => {(
    async () => {  
      setLoading(true);    
      if(userId!==undefined) {
        let data = await getTasksByListIdAndUserId(currentListId, userId);        
        list.current = data;
        setcurrentTasks(list.current);        
      };
      setLoading(false);     
    })()
  },[userId, currentListId]);

  const deleteCurrentTask = async () => {
    if(window.confirm(`Are you sure you want to delete this task? ${currentTaskId}`)){
      setLoading(true)
      const response = await deleteTask(currentTaskId);
      
      if(!response){
        alert('Error when deleting!');
        return;
      }
      
      alert('Task Deleted Successfully!');
      setLoading(false);
    };
  }

  return (
    <TasksContext.Provider 
      value={{ 
        tasks: currentTasks ?? [],        
        loading,
        setLoading,
        setNewTask,
        currentTaskId,
        setCurrentTaskId,
        deleteCurrentTask
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

TasksContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};