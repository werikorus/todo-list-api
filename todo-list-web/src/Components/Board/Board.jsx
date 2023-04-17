import React from "react";
import { useStyles } from  "./BoardStyles";
import { ItemsTasks1 } from "../../Mock/ItemsTasksMock";
import CardTasks from "../CardTasks/CardTasks";

const Board = (prop) =>{
  const classes = useStyles();

  return(
    <div className={classes.boardArea}>
      <ul className={classes.areaItems}>
        {ItemsTasks1.map((item, key) => <CardTasks item={item} key={key}/>) }
      </ul>      
    </div>
  );
};

export default Board;
