import React from "react";
import { useStyles } from  "./BoardStyles";

import { ItemsTasks1 } from "../../Mock/ItemsTasksMock";

const Board = (prop) =>{

  const classes = useStyles();

  return(
    <div className={classes.boardArea}>
      <ul className={classes.areaItems}>
        {ItemsTasks1.map((item, key) => 
          <li className={classes.items} key={ItemsTasks1.toString()}> 
            <input className={classes.input} type="checkbox" />
            <label>{item}</label>
            <button className={classes.button}>X</button>
          </li>
        )}
      </ul>      
    </div>
  );
};

export default Board;
