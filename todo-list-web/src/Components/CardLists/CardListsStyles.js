import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  card:{
    width: '100%',
    borderRadius: '3px',
    margin: '3px',
    transition: '0.4s',
    justifyContent: 'center',
    justifyItems: 'center',
    display: 'flexbox',
    
    '&:hover':{
      cursor: 'pointer',
      backgroundColor: 'var(--color-header-background)',
      backgroundImage: 'var(--color-header-background-image)',
      color: 'white',
    }
  }
});