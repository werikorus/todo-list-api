import { useContext } from "react";
import { TasksContext } from "../Contexts/tasksContext";

const useTasks = () => useContext(TasksContext);

export default useTasks;
