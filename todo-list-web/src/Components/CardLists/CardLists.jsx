import React  from "react";
import { Card } from  './CardListsStyles';

const CardLists = (prop) =>{
  return(
    <Card onSubmit={prop.getLists}>
      <h1>{prop.title}</h1>
    </Card>     
  );
}


export default CardLists;