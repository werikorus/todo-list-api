import React, { createContext, useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { 
  getTasksByListIdAndUserId, 
  setNewTask, 
  deleteTask, 
  updateTask 
} from "../../Services/Tasks/TasksService";
import { useAuthContext, useListsContext } from "../../Hooks";

export const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
  const [currentTasks, setCurrentTasks] = useState([]);
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
        setCurrentTasks(list.current);        
      };
      setLoading(false);     
    })()
  },[userId, currentListId]);

  const deleteCurrentTask = async (taskId) => {
    if(window.confirm(`Are you sure you want to delete this task?`)){    
      const response = await deleteTask(taskId);
      
      if(!response){
        alert(`Error when deleting! ${response}`);
        setLoading(false);
        return;
      }      
      alert('Task deleted Successfully!');
    };
  };

  const setTaskDone = (task) => {
    const updateTaskDoneStatus = {
      id: task.id,
      done: !task.done      
    }
    console.log('Task atual: ', updateTaskDoneStatus)
    return updateTask(updateTaskDoneStatus) || true;
  };

  return (
    <TasksContext.Provider 
      value={{ 
        tasks: currentTasks ?? [],        
        loading,
        setLoading,
        setNewTask,
        currentTaskId,
        setCurrentTaskId,
        deleteCurrentTask,
        setCurrentTasks,
        setTaskDone,
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