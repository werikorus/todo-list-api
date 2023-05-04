import React from "react";
import IputDefault from './../InputDefault';
import ButtonAction from "../ButtonAction/ButtonAction";
import { useStyles } from "./ModalNewListStyles";


const ModalNewList = () => {
  const classes = useStyles();
  const  handleSave = () =>{
    alert('Save!');
  }

  const  handleCancel = () =>{
    alert('Cancel!');
  }

  return(
    <div className={classes.container}>
      <header className={classes.header}>
        <span>New List</span>
        </header>
      <IputDefault />
      <footer className={classes.footer}>
        <ButtonAction txt="Cancel" clickEvent={handleCancel}/>
        <ButtonAction txt="Save" clickEvent={handleSave}/>
      </footer>
    </div>

  );
};

export default ModalNewList;