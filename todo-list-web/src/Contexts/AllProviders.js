import React from "react";
import { AuthProvider } from "./auth";
import { TasksContextProvider } from "./TasksContext/TasksContext";

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
  //TasksContextProvider
);