import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  body:{
    display: 'flex',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',    
  },
  main: {
    display: 'flex', 
    justifyContent: 'center',
  },
  section:{
    display: 'flex',
    flexDirection: 'column',
    height: '100%',  
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',  
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.8rem',
    background: 'white',       
  },
  avatarProfile:{
    width: '10rem',
    borderRadius: '50%',
    justifySelf: 'center',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  subscribeArea:{    
    display: 'grid',   
    flexDirection: 'column',    
    justifyContent: 'center'
  },
  form: {
    display: 'grid',
    justifyContent: 'space-evenly',
    margin: '1rem',
  },
  buttonArea:{
    display: 'flex',
    justifySelf: 'right',
    width: '60%',    
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: '0.8rem'
  }
});
