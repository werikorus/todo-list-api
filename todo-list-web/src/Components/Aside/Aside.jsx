import React, {useState} from "react";
import { useStyles } from "./AsideStyles"; 
import CardLists from "../CardLists";
import ButtonAction from "../ButtonAction";

const Aside = (props) => {  
  const classes = useStyles();
  const [currentUserId, setCurrentUserId] = useState('');

  const handleGetListByUserId = (userId) => {
    console.log('User id:', userId);
  }
  
  const handleCurrentUserID = (userId, currentListDescription) =>{
    console.log('Current List: ', currentListDescription)
    //setCurrentUserId(userId);
  }

  return(   
    <aside className={classes.aside}>
      <span>
        {props.Items.length > 0 
          ? "My Lists" 
          : "You haven't any list yet. Create your first one!"
        }
      </span>
      <hr />      
      {(props.Items.length === 1)
        ? <CardLists 
            title={props.Items.descriptionList} 
            key={props.Items.id}
          />
        : props.Items.map((item, _key) => (
          <CardLists 
            title={item.descriptionList} 
            key={item.id} 
            getTasks={handleCurrentUserID(item.idUser, item.descriptionList)}
          />
        ))} 
        <hr />    
      <ButtonAction 
        txt="Add new List!" 
        clickEvent={handleGetListByUserId(props.Items)}
      />
    </aside>
  );
};

export default Aside;
