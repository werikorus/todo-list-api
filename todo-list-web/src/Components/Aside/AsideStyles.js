import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  aside:{
    display: 'flex',    
    position: 'absolute',
    paddingTop: '20px',
    paddingLeft: '1rem',    
    paddingRight: '1rem',    
    fontSize: '0.7rem',    
    flexDirection: 'column',    
    maxWidth: '11.5rem',
    flexWrap: 'wrap',
    fontSize: '0.6rem',
    //background: 'violet',
    //width: '1rem',

    margin: 'auto',    
    contentVisibility: 'hidden',
    transition: '0.2s', 
    //justifySelf: 'center',
    //'&:hover':{
    //  width: '10rem',
    //},
  },

  ul:{
    paddingLeft: '0rem',     
  },

  header:{    
    textAlign: 'center',    
    marginBottom: '10px',
  },
  footer:{
    display: 'flex',
    flexDirection: 'grid',    
    justifyContent: 'space-evenly',
    margin: '10px',    
  },
});

export const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',  
  maxHeight: '150px',
  transform: 'translate(-50%, -50%)',  
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 24,
  p: 3,  
}