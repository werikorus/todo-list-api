import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  card:{
    display: 'flex',
    width: '100%',
    height: '2.5rem',
    borderRadius: '3px',
    margin: '3px',
    transition: '0.4s',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    paddingBottom: '0.5rem',

    '&:hover':{
      cursor: 'pointer',
      backgroundColor: 'var(--color-header-background)',
      backgroundImage: 'var(--color-header-background-image)',
      color: 'white',
    }
  }
});