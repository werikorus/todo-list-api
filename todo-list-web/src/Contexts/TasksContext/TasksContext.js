
import React, { createContext } from "react";
import PropTypes from 'prop-types';
import { useTasksFetcher } from "../../Services/Tasks/useTasksFetcher";
import useAuth from "../../Hooks/useAuth";


export const TasksContext = createContext({});

export function TasksContextProvider ({ children }){
  const { user } = useAuth();
  const { tasks } = useTasksFetcher(user.given_name);

  return(
    <TasksContext.Provider
      value={ tasks }
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