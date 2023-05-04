import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {        
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '12rem',
    width: '22rem',
    borderRadius: '15px',
    boxShadow: 'rgba(79, 78, 78, 0.522) 1px 0.1px 10px',   
    position: 'relative',
  },
  footer:{
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '20px'
  }
});