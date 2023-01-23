import React from "react";
import { 
  BoardArea, 
  AreaItems, 
  Items, 
  Button } from "./BoardStyles";

import { ItemsTasks1 } from "../../Mock/ItemsTasksMock";

const Board = (prop) =>{
  return(
    <BoardArea>
      <AreaItems>
        {ItemsTasks1.map((item, key) => 
          <Items key={ItemsTasks1.toString()}> 
            <input type="checkbox" />
            <label>{item}</label>
            <Button>X</Button>
          </Items>
        )}
      </AreaItems>      
    </BoardArea>
  );
};

export default Board;
