import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  button: {
    display: 'flex',
    minWidth: '5rem',
    height: '2rem',
    textDecoration: 'none',
    backgroundColor: 'var(--color-input-background)',    
    border: '1px solid  var(--color-header-background)',
    borderRadius: '5px',
    transition: '0.2s',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--color-basic-text)',
    fontSize: '0.8rem',
  
    '&:hover': {
      backgroundColor: 'var(--color-line-in-white)'
    }
  }

});
