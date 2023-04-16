import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  headerPage: {
    display: 'grid',
    justifyContent: 'center',
    justifyItems: 'center',
    height: '11rem',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'baseline',
    backgroundColor: 'var(--color-header-background)',
    backgroundImage: 'var(--color-header-background-image)'
  },

  title: {
    textAlign: 'center',
    color: 'white'
  }
})



