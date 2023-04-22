import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  pageFooter:{        
    display: 'flex',    
  
    justifyContent: 'center',
    justifySelf: 'flex-end',
    fontSize: '0.8rem',    
  },
  copyright:{
    margin: '0',
    textAlign: 'center',
    color: 'var(--color-basic-text)'
  }
});