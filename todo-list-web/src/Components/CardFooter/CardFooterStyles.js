import { createUseStyles } from "react-jss";


export const useStyles = createUseStyles({
  card:{
    display: 'flex',
    height: '9mm',    
    fleDirection: 'row',
    marginTop: '3rem',
    marginBottom: '3rem',
    borderRadius: '2mm 2mm 2mm 2mm',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    boxShadow: 'rgba(79, 78, 78, 0.522) 1px 0.1px 10px',        
  },
  deleteListButton:{    
    display: 'flex',
    border: 'none',
    height: '100%',
    width: '2.5rem',
    borderRadius: '0 2mm 2mm 0',
  },
  deleteListImg:{
    width: '95%'
  }
});