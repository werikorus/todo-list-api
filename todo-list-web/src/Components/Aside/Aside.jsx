import React from "react";
import { AsideComponent } from "./AsideStyles";
import CardLists from "../CardLists";

const Aside = (props) => {
  return(
    <AsideComponent>
      <span>{props.Items.length > 0 ? "My Lists" : "You haven't any list yet. Create your first one!"}</span>
      <hr />      
      {
      props.Items.map((item, key) => 
        <CardLists title={item} key={item.toString()}/>
      )}
    </AsideComponent>
  );
};

export default Aside;
