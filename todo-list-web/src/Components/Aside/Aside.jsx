import React from "react";
import { useStyles } from "./AsideStyles"; 
import CardLists from "../CardLists";

const Aside = (props) => {  
  const classes = useStyles();

  return(   
    <aside className={classes.aside}>
      <span>{props.Items.length > 0 ? "My Lists" : "You haven't any list yet. Create your first one!"}</span>
      <hr />      
      {(props.Items.length === 1 )
        ? <CardLists title={props.Items.descriptionList} key={props.Items.id}/>
        : props.Items.map((item, _key) => <CardLists title={item.descriptionList} key={item.id}/>)}
    </aside>
  );
};

export default Aside;
