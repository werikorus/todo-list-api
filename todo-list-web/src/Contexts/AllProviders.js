import React from "react";
import { 
  AuthContextProvider, 
  ListsContextProvider, 
  TasksContextProvider 
} from "./index";

const composeProviders = (...providers) => {
  return(props) => {
    return providers.reduceRight(
      (children, Provider)=> <Provider {...props}>{children}</Provider>,
      props.children
    )
  }
};

export const AllProviders = composeProviders(  
  AuthContextProvider,
  ListsContextProvider,
  TasksContextProvider,
);