import React from 'react';
import { ListsContextProvider } from '../../Contexts/ListsContext';
import { renderHook } from '@testing-library/react';
import { useListscontext } from './useListscontext';

describe('TasksContextProvider', () => {
  it('should return tasks context', async () => {
    const { result } = createHook()
    expect(result.current.tasks.length).toBeGreaterThan(0);
  });
})


const composeWrapper = ({ children }) => (
  <ListsContextProvider>{children}</ListsContextProvider>
);

const createHook = () => {
  renderHook(() => useListscontext(),{
    wrapper: composeWrapper
  });
}