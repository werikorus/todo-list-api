import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  card:{ 
    display: 'flex',
    //width: '100%',
    height: '2.5rem',
    borderRadius: '5px',
    margin: '3px',
    transition: '0.4s',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',    
    marginBottom: '0.5rem',   
    backgroundColor: 'var(--color-list-background)',
    fontSize: '8px',
    marginRight: '1rem',
    marginLeft: '1rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    
    '&:hover':{
      color: 'white',
      cursor: 'pointer',
      backgroundColor: 'var(--color-header-background)',
      backgroundImage: 'var(--color-header-background-image)',      
    }
    
  }
});