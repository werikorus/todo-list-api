import React from "react";
import { useStyles } from  "./BoardStyles";
import CardTasks from "../CardTasks/CardTasks";
import CardFooter from "../CardFooter/CardFooter";
import Aside from "../Aside/Aside";
import Loading from "../Loading/Loading";
import { useTasksContext } from "../../Hooks";
 
const Board = () =>{
  const classes = useStyles();  
  const { tasks, loading } = useTasksContext();

  const handleTasks = () => {
    if(loading){
      return <Loading />
    }
    
    return (
      <>         
        {(tasks?.length === 0) 
          ? <span>Create your first task right now! :)</span>            
          : tasks?.map((item, key) => <CardTasks item={item} key={key}/>
        )}           
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
