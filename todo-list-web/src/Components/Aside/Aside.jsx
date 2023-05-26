import React, { useState } from 'react';
import { useStyles, styleModal } from './AsideStyles'; 
import CardLists from '../CardLists';
import ButtonAction from '../ButtonAction';
import Loading from '../Loading/Loading';
import InputDefault from '../InputDefault/InputDefault';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useAuthContext, useListsContext } from '../../Hooks';

const Aside = () => {  
  const [ open, setOpen ] = useState(false);
  const [descriptionList, setDescriptionList] = useState('');  
  const { user } = useAuthContext();
  const userId = user.given_name;
  const classes = useStyles();

  const { lists, loading, saveNewList } = useListsContext();
  
  const handleComponent = () => {
    if(loading){
      return <Loading />
    };
    
    return (
      <>
        <h3 className={classes.title}>
          {
            lists?.length > 0
              ? 'My Lists'
              : 'You have not any list yet. Create your first one !'
          }          
        </h3>                
        <scroll className={classes.scroll}>                          
          <ul className={classes.ul}>        
            {lists?.map((list, index) => (
              <CardLists                 
                id={list.id} 
                index={index} 
                title={list.descriptionList} 
              />
            ))}
          </ul>
        </scroll>
        <br />                
      </> 
    );    
  };

  const handleSaveNewList = () => {
    saveNewList(descriptionList, userId);    
    setOpen(false);    
  };

  return(
    <aside className={classes.aside}>   
      {handleComponent()}
      <ButtonAction txt='Add new List!' clickEvent={() => setOpen(true)} />
      <div className={classes.ModalNewList}>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={styleModal}>
            <header className={classes.header}>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                Type your new List bellow
              </Typography>

            </header>
            <InputDefault OnChange={(e) => setDescriptionList(e.target.value)} />          
            <footer className={classes.footer}>
              <ButtonAction txt='Cancel' clickEvent={()=> setOpen(false)} />
              <ButtonAction txt='Save' clickEvent={handleSaveNewList} />
            </footer>
          </Box>
        </Modal>
      </div>    
    </aside>
  );
};

export default Aside;
