import React, { useState } from "react";
import IputDefault from './../InputDefault';
import ButtonAction from "../ButtonAction/ButtonAction";
import { useStyles } from "./ModalNewListStyles";
import { setNewList } from "../../Services/ListsAPI";

const ModalNewList = () => {
  const [descriptionList, setDescriptionList] = useState('');
  const [open, setOpen] = useState(false);
  
  const classes = useStyles();

  const idUser = "3fa85f64-5717-4562-b3fc-2c963f66afa6";

  const newList = {    
    descriptionList: descriptionList,
    dateCreate: new Date(),
    dateUpdate: new Date(),
    idUser: idUser,
  }

  const handleSave = async () => {
    const response = await setNewList(JSON.stringify(newList));    
    console.log('Error when creating new List: ', response);    
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return(
    <div className={classes.container}>
      <header className={classes.header}>
        <span>Type your new List bellow</span>
      </header>

      <IputDefault OnChange={(e) => setDescriptionList(e.target.value)} />   

      <footer className={classes.footer}>
        <ButtonAction txt="Cancel" clickEvent={handleCancel} />
        <ButtonAction txt="Save" clickEvent={handleSave} />
      </footer>
    </div>
  );
};

export default ModalNewList;
