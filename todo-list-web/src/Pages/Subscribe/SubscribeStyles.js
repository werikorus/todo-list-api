import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  body:{
    display: 'flex',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',    
  },
  main: {
    display: 'flex', 
    justifyContent: 'center',
  },
  section:{
    display: 'flex',
    minWidth: '22%',
    flexDirection: 'column',    
    height: '100%',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',  
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.8rem',
    background: 'white',
  },
  avatarProfile:{
    width: '10rem',
    borderRadius: '50%',
    justifySelf: 'center',
    marginTop: '1rem',
    marginBottom: '1rem',    
  },
  subscribeArea:{    
    display: 'grid', 
    flex: '100%',
    flexDirection: 'column',    
    justifyContent: 'center',    
  },
  form: {
    display: 'grid',
    justifyContent: 'space-evenly',
    margin: '1rem',    
  },
  buttonArea:{
    display: 'flex',
    justifySelf: 'right',
    width: '60%',    
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: '0.8rem'
  },
  selectRole: {    
    display: 'flex',        
    height: '3.5rem',
    color: 'var(--color-basic-text)',
    backgroundColor: 'var(--color-input-background)',
    margin: '0.3rem',    
    alignItems: 'center',
    borderRadius: '0.6rem',
    border: '1px solid white',
    outline: '0',
    paddingLeft: '30px',
    fontSize: '1.5rem',
    '& > option':{
      color: 'var(--color-basic-text)',
    }    
  },
  input:{
    display: 'flex',    
    maxWidth: '300px',    
    height: '3rem',
    color: 'var(--color-basic-text)',
    backgroundColor: 'var(--color-input-background)',
    margin: '0.3rem',    
    alignItems: 'center',
    borderRadius: '0.6rem',    
    outline: '0',
    paddingLeft: '30px',
    fontSize: '1.5rem',
    border: 'solid 1px var(--color-input-border)',
  },
  select:{
    display: 'flex',    
    height: '3rem',
    color: 'var(--color-basic-text)',
    backgroundColor: 'var(--color-input-background)',
    margin: '0.3rem',    
    alignItems: 'center',
    borderRadius: '0.6rem',    
    outline: '0',
    paddingLeft: '30px',
    fontSize: '1.5rem',
    border: 'solid 1px var(--color-input-border)',
    justifyContent: 'center',
    background: 'url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #ddd',
    appearance: 'none',
    backgroundPositionX: '253px',
  },
  options:{
    display: 'flex',
    textAlign: 'center',
  },
  loadingComponent:{
    position: "absolute",
    opacity: '0%'
  }
});
