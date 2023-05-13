import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {        
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    justifyItems: 'center',
    height: '14rem',
    borderRadius: '15px',
    boxShadow: 'rgba(79, 78, 78, 0.522) 1px 0.1px 10px',   
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',    
    p: 4,
  },
  header:{
    textAlign: 'center',
    marginBottom: '10px',
  },
  footer:{
    display: 'flex',
    flexDirection: 'grid',    
    justifyContent: 'space-evenly',
    margin: '20px',    
  },
});

export const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',  
  bgcolor: 'background.paper',
  //border: '2px solid #000',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,  
}