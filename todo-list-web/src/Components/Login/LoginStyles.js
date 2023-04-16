import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  main: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    
  },

  divArea : {
    height: '50%',
    width: '50%',
    display: 'flex',
    color: 'var(--color-input-background)',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden'
  },

  loginArea : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-Evenly',
    width: '45%',
    alignItems: 'center',
    border: 'solid 1px white',
    borderLeft: 'none',
    borderRadius: '0 10px 10px 0',
    backgroundColor: 'var(--color-background)'
  },

  buttonsArea: {
    display: 'flex',
    justifyContent: 'space-Evenly',
    width: '100%'
  },

  inputArea: {
    display: 'flex',
    justifyContent: 'spaceBetween',
    alignItems: 'center'
  },

  inputLogin: {
    height: '2rem',
    alignContent: 'center',
    marginLeft: '7px',
    color: 'var(--color-basic-text)',
    backgroundColor: 'var(--color-input-background)',
    borderRadius: '0.5rem',
    border: '1px solid var(--color-header-background)',
    outline: 0,
    fontSize: '1rem',
    paddingLeft: '0.8rem',
  },

  label: {
    justifySelf: 'left',
    paddingTop: '1rem',
  },
  
  divImage:{
    width: '100%',
    height: '100%',
    borderRadius: '10px 0 0 10px',
    border: 'none',
    position: 'static',
  },

  title: {
    color: 'var(--color-header-background)',
  },

  line: {
    marginTop: '-30px',
    color: 'var(--color-header-background)',
    width: '60%'
  },
    
  subtitle:{
    marginTop: '-30px',
    color: 'var(--color-header-background)',
  },
  
  googleLogin: {
    height: '23px',
    color: 'black',
    border: '1px solid var(--color-header-background)',
    width: '10rem',
    borderRadius: '3px',
    textAlign: 'center',
    transition: '0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'spaceEvenly',
    fontSize: '13px',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'var(--color-line-in-white)'  
    }  
  },
})
