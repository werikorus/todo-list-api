import React, {useRef, useEffect, useState} from "react";
import { useStyles } from  "./BoardStyles";
import { ItemsTasks1, ItemsTasks2 } from "../../Mock/ItemsTasksMock";
import CardTasks from "../CardTasks/CardTasks";
import CardFooter from "../CardFooter/CardFooter";
import Aside from "../Aside/Aside";
import { getTasks } from "../../Services/TasksAPI";
import useAuth from "../../Hooks/useAuth";

const Board = (prop) =>{
  const classes = useStyles();  
  const tasks = useRef([]);
  const [currentTasks, setCurrentTasks] = useState([]);

  const [ loading, setLoading ] = useState(false);
  
  const { user } = useAuth();
  const userId = user?.given_name;
  
  //useEffect(() => {(
  //  async () => {            
  //    setLoading(true);      
  //    const data = await getTasksUser(userId);
  //    tasks.current = data;
  //    setCurrentTasks(tasks.current);        
  //    setLoading(false);           
  //  })();
  //},[userId]);
  
  return(
    <div className={classes.boardArea}>
      <Aside />
      <ul className={classes.areaItems}> 
        {currentTasks?.map((item, key) => 
          <CardTasks 
            item={item} 
            key={key} 
            idItem={item.id}
          />
        )}       
      </ul> 
      <CardFooter />       
    </div>
  );
};

export default Board;
