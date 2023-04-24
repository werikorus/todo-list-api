import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  input:{
    display: 'flex',    
    maxWidth: '300px',    
    height: '3.5rem',
    color: 'var(--color-basic-text)',
    backgroundColor: 'var(--color-input-background)',
    margin: '0.3rem',    
    alignItems: 'center',
    borderRadius: '0.6rem',
    border: '1px solid white',
    outline: '0',
    paddingLeft: '30px',
    fontSize: '1.5rem',
  },
});
