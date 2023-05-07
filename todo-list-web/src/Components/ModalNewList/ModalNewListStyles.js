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
    position: 'relative',    
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
  }
});