import React from 'react';
import { TasksContextProvider } from '../../Contexts/TasksContext/tasksContext';
import { renderHook } from '@testing-library/react';
import { useTasksContext } from './useTasksContext';

describe('TasksContextProvider', () => {
  it('should return tasks context', async () => {
    const { result } = createHook()
    expect(result.current.tasks.length).toBeGreaterThan(0);
  });
})


const composeWrapper = ({ children }) => (
  <TasksContextProvider>{children}</TasksContextProvider>
);

const createHook = () => {
  renderHook(() => useTasksContext(),{
    wrapper: composeWrapper
  });
}