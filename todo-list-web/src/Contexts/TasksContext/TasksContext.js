import React, { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useTasksFetcher } from "../../Services/Tasks/useTasksFetcher";

export const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
  const [currentTasks, setcurrentTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const { tasks } = useTasksFetcher();

  useEffect(()=>{
    setcurrentTasks(tasks);    
  }, [tasks])

  const deleteCurrentTask = (taskId)=>{
    alert(`Are you sure you want to delete this task? ${taskId}`);
  }

  return (
    <TasksContext.Provider 
      value={{ 
        tasks: currentTasks ?? [],
        loading,
        setLoading,
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