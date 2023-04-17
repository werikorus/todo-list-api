import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  boardArea: {
    display: 'flex',
    justifySelf: 'start',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  areaItems:{
    justifyContent: 'center',
    minWidth: '200px',
    paddingLeft: '0rem',    
  },
});