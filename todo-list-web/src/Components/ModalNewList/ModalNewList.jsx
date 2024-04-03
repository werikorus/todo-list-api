import React, { useState, useEffect } from "react";
import InputDefault from './../InputDefault';
import ButtonAction from "../ButtonAction/ButtonAction";
import { useStyles, styleModal } from "./ModalNewListStyles";
import { setNewList } from "../../Services/ListsAPI";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const ModalNewList = (open, onClose) => {
  const [descriptionList, setDescriptionList] = useState('');
  //const [open, setOpen] = useState(props.open);

  const classes = useStyles();

  const idUser = "3fa85f64-5717-4562-b3fc-2c963f66afa6";

  const newList = {    
    descriptionList: descriptionList,
    dateCreate: new Date(),
    dateUpdate: new Date(),
    idUser: idUser,
  }

  const handleSave = async () => {
    if(descriptionList===""){
      alert('Type your list');
      return;
    }

    const response = await setNewList(newList);

    if(!response.ok){
      alert('Error whem save new list: ', response.status);
    }
  };

  return(
    <div>
      <Modal
        open={() => open}
        onClose={() => onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Type your new List bellow
          </Typography>
          <br />
        
          <InputDefault OnChange={(e) => setDescriptionList(e.target.value)} />

          <footer className={classes.footer}>
            <ButtonAction txt="Cancel" clickEvent={onClose} />
            <ButtonAction txt="Save" clickEvent={handleSave} />
          </footer>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalNewList;
