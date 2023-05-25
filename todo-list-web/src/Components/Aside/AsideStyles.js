import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  aside:{
    display: 'flex',
    flex: '100%',
    position: 'absolute',
    paddingTop: '20px',
    paddingLeft: '1rem',    
    paddingRight: '1rem',     
    flexDirection: 'column', 
    width: '100%',
    maxWidth: '11.5rem',    
    flexWrap: 'wrap',
    fontSize: '0.6rem',
    margin: 'auto',    
    contentVisibility: 'hidden',
    transition: '0.2s',     
    overflow: 'auto',
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
  scroll:{
    width: '100%',    
    maxHeight: '25rem',    
    overflowY: 'auto',    
    overflowX: 'hidden',
  }
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
