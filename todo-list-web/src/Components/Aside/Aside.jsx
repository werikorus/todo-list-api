import React from "react";
import { AsideComponent } from "./AsideStyles";
import CardLists from "../CardLists";

const Aside = (props) => {  
  return(   
    <AsideComponent>
      <span>{props.Items.length > 0 ? "My Lists" : "You haven't any list yet. Create your first one!"}</span>
      <hr />      
      {(props.Items.length === 1 )
        ? <CardLists title={props.Items.descriptionList} key={props.Items.id}/>
        : props.Items.map((item, _key) => <CardLists title={item.descriptionList} key={item.id}/>) }
    </AsideComponent>
  );
};

export default Aside;
