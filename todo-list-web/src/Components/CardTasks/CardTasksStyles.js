import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  items:{
    listStyle: 'none',
    color: 'var(--color-basic-text)',
    display: 'flex',
    marginBottom: '2mm',
    fontSize: '1.3rem',
    transition: '0.2s',
    backgroundColor: 'var(--color-footer)',
    justifyContent: 'space-between',  
    padding: '10px',
    borderRadius: '0.3rem',
    boxShadow: 'rgba(79, 78, 78, 0.522) 1px 0.1px 10px',
  
    '&:hover':{
      backgroundColor: 'var(--color-header-background)',
      backgroundImage: 'var(--color-header-background-image)',
      color: 'white',
    }
  },
  input:{
    height: '1rem',
    width: '1rem',
    margin: '0 3mm 0 3mm',
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    background: 'var(--color-input-background)',
    border: '1px solid var(--color-line-in-white)',
    cursor: 'pointer'
  },
  button:{
    display: 'flex',
    height: '4.5mm',
    width: '4.5mm',
    margin: '0 3mm 0rem 3mm',
    alignContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    border: 'none',
    borderRadius: '0.8mm',
    background: 'var(--color-input-background)',
    opacity: '85%', 
    cursor: 'pointer'
  },
  delImg:{
    width: '100%',
    height: '100%',
  }
});