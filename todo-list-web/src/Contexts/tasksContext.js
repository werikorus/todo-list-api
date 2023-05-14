import { createContext } from "react";
import { getTasks } from "../Services/TasksAPI";

export const TasksContext = createContext({});

export const  TasksProvider = ({ children }) => {
  const getTasksUser = async(idUser) => {
    return getTasks(idUser);
  }

  return(
    <TasksContext.Provider
      value={{ getTasksUser }}
    >
      {children}
    </TasksContext.Provider>
  );
}
