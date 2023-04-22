import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  form:{
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '0.8rem',
    marginRight: '0.8rem',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  input:{
    display: 'flex',
    width: '100%',
    maxWidth: '300px',
    minWidth: '100px',
    height: '3.5rem',
    color: 'var(--color-basic-text)',
    backgroundColor: 'var(--color-input-background)',
    
    alignItems: 'center',
    borderRadius: '0.6rem 0 0 0.6rem',
    border: '1px solid white',
    outline: '0',
    paddingLeft: '53px',
    fontSize: '1.5rem',
  },
  addButton:{
    display: 'flexbox',
    width: '3.5rem',
    outline: '0',
    border: 'none',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: '0 0.6rem 0.6rem 0',
    transition: '0.2s',
  },
  addImg:{
    height: '12mm',
    paddingTop: '1.3mm',
  }
});
