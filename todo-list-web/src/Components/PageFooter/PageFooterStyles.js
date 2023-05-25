import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  pageFooter:{        
    display: 'flex',    
    justifyContent: 'center',    
    fontSize: '0.8rem',     
    left: '50%',
    transform: 'translateX(-50%)',
    position: 'fixed',
    bottom: '0',   
    textAlign: 'center',
  },
  copyright:{
    margin: '0',
    textAlign: 'center',
    color: 'var(--color-basic-text)'
  }
});