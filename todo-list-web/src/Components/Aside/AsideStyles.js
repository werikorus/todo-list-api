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
    maxWidth: '11.5rem',
    flexWrap: 'wrap',
    fontSize: '0.6rem',
    //background: 'violet',
    //width: '1rem',

    margin: 'auto',    
    contentVisibility: 'hidden',
    transition: '0.2s', 
    //justifySelf: 'center',
    //'&:hover':{
    //  width: '10rem',
    //},
  },

  ul:{
    paddingLeft: '0rem',     
  }
});