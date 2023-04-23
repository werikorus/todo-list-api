import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  input:{
    display: 'flex',
    width: '100%',
    maxWidth: '300px',
    minWidth: '100px',
    height: '3.5rem',
    color: 'var(--color-basic-text)',
    backgroundColor: 'var(--color-input-background)',
    
    alignItems: 'center',
    borderRadius: '0.6rem',
    border: '1px solid white',
    outline: '0',
    paddingLeft: '30px',
    fontSize: '1.5rem',
  },
});
