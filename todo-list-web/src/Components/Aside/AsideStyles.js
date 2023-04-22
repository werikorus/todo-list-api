import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  aside:{
    display: 'flex',    
    position: 'absolute',
    paddingTop: '20px',
    paddingLeft: '1rem',    
    paddingRight: '1rem',    
    fontSize: '0.7rem',    
    flexDirection: 'column',    
    //background: 'violet',
    height: '100%',
    margin: 'auto',    
  },
  ul:{
    paddingLeft: '0rem',     
  }
});