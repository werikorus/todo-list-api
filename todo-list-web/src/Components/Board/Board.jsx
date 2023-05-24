import React, {useEffect, useState} from "react";
import { useStyles } from  "./BoardStyles";
import CardTasks from "../CardTasks/CardTasks";
import CardFooter from "../CardFooter/CardFooter";
import Aside from "../Aside/Aside";
import Loading from "../Loading/Loading";
import { useTasksContext } from "../../Hooks";
 
const Board = () =>{
  const classes = useStyles();  
  const [currentTasks, setCurrentTasks] = useState([]);
    
  const { tasks, loading } = useTasksContext();

  useEffect(()=>{
    setCurrentTasks(tasks);
    console.log('Trying to setcurrentTasks', tasks);
  }, [tasks])

  const handleTasks = () => {
    if(loading){
      return <Loading />
    }
    
    return (
      <> 
        {
          (currentTasks.length === 0) 
            ? <span>Create your first task right now! :)</span>            
            : currentTasks?.map((item, key) => 
              <CardTasks 
                item={item} 
                key={key} 
                idItem={item.id}
              />
            )         
          //currentTasks.length === 0? <CardFooter /> : null
        }           
      </> 
    );
  }

  return(
    <div className={classes.boardArea}>
      <Aside />      
      <ul className={classes.areaItems}>  
        {handleTasks()}  
      </ul>         
    </div>
  );
};

export default Board;
