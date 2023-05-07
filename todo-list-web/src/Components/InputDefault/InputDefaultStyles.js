import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  input:{
    display: 'flex',  
    maxWidth: '300px',
    marginLeft: '1rem',
    marginRight: '1rem',
    height: '3.5rem',
    color: 'var(--color-basic-text)',
    backgroundColor: 'var(--color-input-background)',    
    borderRadius: '0.6rem',    
    outline: '0',
    paddingLeft: '30px',
    fontSize: '1.5rem',
    border: '1px solid var(--color-input-border)',
  },
});
