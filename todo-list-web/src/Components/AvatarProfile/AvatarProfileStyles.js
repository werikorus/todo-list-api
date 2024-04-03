import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({  
  picture: {
    display: 'flex',
    height: '10rem',
    width: '10rem',
    borderRadius: '50%',
    background: '#ddd',    
    alignItems: 'center',
    justifyContent: 'center',
    color: '#aaa',
    cursor: 'pointer',
    fontFamily: 'sans-serif',
    transition: 'color 300ms ease-in-out, background 300ms ease-in-out',
    outline: 'none',
    overflow: 'hidden',    
    '&: hover': {
      color: '#777',
      background: '#hover',
    },
  
    '&: active': {
      borderColor: 'turquoise',
      color: 'turquoise',
      background: '#eee'
    },

    '&: focus': {
      color: '#777',
      background: '#ccc',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    }
  },
  
  input:{
    display: 'none'
  },
});