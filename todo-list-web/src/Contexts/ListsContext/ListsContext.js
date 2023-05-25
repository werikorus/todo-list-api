
import React, { createContext } from "react";
import PropTypes from 'prop-types';
import { useAuthContext } from "../../Hooks/index";
import { useEffect, useState, useRef } from "react";
import { getListsByUserId } from "../../Services/Lists/ListsService";
import { saveNewList } from "../../Components/Aside/operation/setNewList";

export const ListsContext = createContext({});
export function ListsContextProvider ({ children }){
  const [ currentLists, setCurrentLists ] = useState([]);  
  const [ currentListId, setCurrentListId ] = useState('');
  const [ loading, setLoading ] = useState(false);
    
  const list = useRef([]);
  const { user } = useAuthContext();  
  const userId = user.given_name;

  useEffect(() => {(
    async () => {  
      setLoading(true);    
      if(userId!==undefined) {
        let data = await getListsByUserId(userId);             
        list.current = data;
        setCurrentLists(list.current);       
        setCurrentListId(list.current[0].id);        
      }
      setLoading(false);     
    })()
  },[userId]);

  return(
    <ListsContext.Provider
      value={{ 
        lists: currentLists ?? [],
        saveNewList,
        loading,
        setLoading,
        currentListId,
        setCurrentListId
      }}
    >
      {children}
    </ListsContext.Provider>
  );
}

ListsContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};