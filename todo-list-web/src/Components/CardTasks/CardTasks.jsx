import React from "react";
import { useStyles } from "./CardTasksStyles";

export const CardTasks = (item, key) => {
  const classes = useStyles();
  console.log(item);

  return (  
    <li className={classes.items} key={key}> 
      <input className={classes.input} type="checkbox"/>
      <label>{item.title}</label>
      <button className={classes.button}>X</button>
    </li>
  );
};


export default CardTasks;