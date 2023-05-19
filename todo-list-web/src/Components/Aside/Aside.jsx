import React, { useState, useEffect, useRef} from "react";
import { useStyles, styleModal } from "./AsideStyles"; 
import CardLists from "../CardLists";
import ButtonAction from "../ButtonAction";
import Loading from "../Loading/Loading";
import InputDefault from "../InputDefault/InputDefault";
import { saveNewList } from "./operation/setNewList";
import useAuth from "../../Hooks/useAuth";
import { useTasksContext } from "../../Hooks/useTasksContext/useTasksContext";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Aside = (props) => {  
  const [ open, setOpen ] = useState(false);
  const [descriptionList, setDescriptionList] = useState('');

  const [ loading, setLoading ] = useState(false);
  const list = useRef([]);
  const [currentLists, setCurrentLists] = useState([]);

  const { user } = useAuth();

  const { tasks } = useTasksContext();
  
  const classes = useStyles();

  //id werik= 3fa85f64-5717-4562-b3fc-2c963f66afa6

  useEffect(() => {(
    async () => {            
      setLoading(true);      
      list.current = tasks;
      setCurrentLists(list.current);        
      setLoading(false);           
    })();
  },[tasks]);

  //useEffect(() => {(
  //  async () => {            
  //    setLoading(true);
  //    const data = await getListsByUserId(user.given_name);
  //    list.current = data;
  //    setCurrentLists(list.current);        
  //    setLoading(false);           
  //  })();
  //},[user.given_name]);

   const handleComponent = (loadingData) =>{
    if(loadingData){
      return <Loading />
    }else{
      return (
      <>
        <span>
          {currentLists?.length > 0
            ? "My Lists"
            : "You haven't any list yet. Create your first one!"}
        </span>
        <ul className={classes.ul}>
          <hr />
          {(currentLists?.length === 1)
            ? <CardLists
                title={currentLists?.descriptionList}
                key={currentLists?.id} 
              />
            : currentLists?.map((item, _key) => (
              <CardLists
                title={item.descriptionList}
                key={item.id}                
              />
            )
          )}
        </ul>
        <br />
      </> 
    )};
  }

  const handleSaveNewList =  () => {
    saveNewList(descriptionList, user.given_name);

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
