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
  
  useEffect(() => {(
    async () => {            
      setLoading(true);
      console.log('USER atual: ', user);
      const data = await getTasks(user.given_name);
      tasks.current = data;
      setCurrentTasks(tasks.current);        
      setLoading(false);           
    })();
  },[]);
  
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
