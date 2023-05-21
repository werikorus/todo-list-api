import { useContext } from 'react';
import { TasksContext } from '../../Contexts/TasksContext/TasksContext';

export const useTasksContext = () => useContext(TasksContext);