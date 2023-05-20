import React, {useEffect, useState} from "react";
import { useStyles } from  "./BoardStyles";
import CardTasks from "../CardTasks/CardTasks";
import CardFooter from "../CardFooter/CardFooter";
import Aside from "../Aside/Aside";
import { useListsContext } from "../../Hooks/useListscontext";
import Loading from "../Loading/Loading";


const Board = (prop) =>{
  const classes = useStyles();  
  const [currentTasks, setCurrentTasks] = useState([]);
    
  const { tasks, loading } = useListsContext();

  useEffect(()=>{
    setCurrentTasks(tasks);
  }, [tasks])

  const handleLists = () => {
    if(loading){
      return <Loading />
    }
    
    return (
      <> 
        {currentTasks?.map((item, key) => 
          <CardTasks 
            item={item} 
            key={key} 
            idItem={item.id}
          />
        )}   
        <CardFooter />
      </> 
    );
  }

  return(
    <div className={classes.boardArea}>
      <Aside />      
      <ul className={classes.areaItems}>  
        {handleLists()}  
      </ul>         
    </div>
  );
};

export default Board;
