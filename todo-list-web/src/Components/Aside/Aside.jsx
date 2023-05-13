import React, { useState, } from "react";
import { useStyles, styleModal } from "./AsideStyles"; 
import CardLists from "../CardLists";
import ButtonAction from "../ButtonAction";
import { getListsByUserId } from "./../../Services/ListsAPI";
import Loading from "../Loading/Loading";
import InputDefault from "../InputDefault/InputDefault";
import { setNewList } from "../../Services/ListsAPI";
import { saveNewList } from "./operation/setNewList";


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Aside = (props) => {  
  const { loading } = props;
  const [ open, setOpen ] = useState(false);
  const [descriptionList, setDescriptionList] = useState('');
  
  const classes = useStyles();
  const [currentUserId, setCurrentUserId] = useState('');

  const handleComponent = (loadingData) =>{
    if(loadingData){
      return <Loading />
    }else{
      return (
      <>
        <span>
          {props.Items.length > 0
            ? "My Lists"
            : "You haven't any list yet. Create your first one!"}
        </span>
        <ul className={classes.ul}>
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
                //getTasks={handleCurrentUserID(item.idUser, item.descriptionList)}
              />
            )
          )}
        </ul>
        <br />
      </> 
    )};
  }

  const idUser = "3fa85f64-5717-4562-b3fc-2c963f66afa6";

  const handleSaveNewList =  () => {
    saveNewList(descriptionList, idUser);

    props.Items.push(descriptionList);
    setOpen(false);
  };

  return(
    <aside className={classes.aside}>      
      {handleComponent(loading)}
      <ButtonAction 
        txt="Add new List!"   
        clickEvent={() => setOpen(true)}
      />
    
      <div className={classes.ModalNewList}>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <header className={classes.header}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Type your new List bellow
              </Typography>

            </header>
            <InputDefault OnChange={(e) => setDescriptionList(e.target.value)} />          
            <footer className={classes.footer}>
              <ButtonAction txt="Cancel" clickEvent={()=> setOpen(false)} />
              <ButtonAction txt="Save" clickEvent={handleSaveNewList} />
            </footer>
          </Box>
        </Modal>
      </div>
    </aside>
  );
};

export default Aside;
