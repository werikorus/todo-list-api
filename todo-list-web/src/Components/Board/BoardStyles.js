import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  boardArea: {     
    display: 'flex', 
    flexDirection: 'column',        
    width: '100%',
    height: '100%',
    margin: 'auto',    
  },
  areaItems:{
    marginTop: '2rem',
    margin: 'auto',    
    minWidth: '200px',
    maxWidth: '350px',
    paddingLeft: '0rem',    
  },
});