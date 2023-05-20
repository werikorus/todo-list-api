import React from "react";
import { AuthProvider } from "./auth";
import { ListsContextProvider } from "./ListsContext";
import { TasksContextProvider } from "./TasksContext";

const composeProviders = (...providers) => {
  return(props) => {
    return providers.reduceRight(
      (children, Provider)=> <Provider {...props}>{children}</Provider>,
      props.children
    )
  }
};

export const AllProviders = composeProviders(  
  AuthProvider,
  ListsContextProvider,
  TasksContextProvider,
);