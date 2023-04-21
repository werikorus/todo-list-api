import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  button: {
    minWidth: '5rem',
    height: '2rem',
    textDecoration: 'none',
    backgroundColor: 'var(--color-input-background)',
    border: '1px solid  var(--color-header-background)',
    borderRadius: '5px',
    transition: '0.2s',
    color: 'var(--color-line-in-white)',
  
    '&:hover': {
      backgroundColor: 'var(--color-line-in-white)'
    }
  }
});
