import React, { createContext, useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import useAuth from "../../Hooks/useAuth";
import { useTasksFetcher } from "../../Services/Tasks/useTasksFetcher";


export const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
  const [currentTasks, setcurrentTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const  { tasks } = useTasksFetcher();

  useEffect(()=>{
    setcurrentTasks(tasks);
  }, [tasks])

  return (
    <TasksContext.Provider 
      value={{ 
        tasks: currentTasks ?? [],
        loading,
        setLoading
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