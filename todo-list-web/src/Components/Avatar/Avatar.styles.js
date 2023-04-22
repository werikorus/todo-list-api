import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  divPhoto:{
    display: 'flex',
    marginTop: '0.5rem',
    flexDirection: 'column',    
    alignItems: 'center',  
    justifySelf: 'right',    
    fontSize: '0.7rem',
    cursor: 'pointer'
  },
  img:{
    borderRadius: '50%',
    width: '3rem'
  },
  nameAvatar:{
    marginTop: '0.5mm',
  }
});

