import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  headerPage: {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',    
    flexDirection: 'column',    
    backgroundColor: 'var(--color-header-background)',
    backgroundImage: 'var(--color-header-background-image)'    
  },

  title: {
    textAlign: 'center',
    color: 'white'
  }
})



