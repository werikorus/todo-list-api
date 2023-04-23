import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  main: {
    display: 'flex',    
    justifyContent: 'center',
    alignItems: 'center',
  },
  subscribeArea:{    
    display: 'flex',    
    maring: 'auto',
    background: 'yellow'
  },
  avatarProfile:{
    width: '10rem',
    borderRadius: '50%',
  }
});
