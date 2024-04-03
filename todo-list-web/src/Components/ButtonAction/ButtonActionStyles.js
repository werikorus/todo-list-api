import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  button:{
    minWidth: '4.5rem',    
    height: '2.5rem',
    cursor: 'pointer',
    backgroundColor: 'var(--color-input-background)',
    border: 'solid 1px var(--color-input-border)',    
    borderRadius: '5px',
    transition: '0.2s',    
    '&:hover': {
      backgroundColor: 'var(--color-input-hover)'
    },
    margin: '6px'
  }
});
