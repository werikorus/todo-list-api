import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  body:{
    fontRamily: 'Arial, sans-serif',
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333',
    background: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
  },
  container: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  alertIcon: {
    fontSize: '5rem',
    color: '#f5d100',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '3rem',
    marginTop: '0',
    color: '#000',
    textShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
  },
  subtitle: {
    marginBottom: '1rem',
    color: '#333'
  },
  homeButton: {
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '#555',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    transition: 'background-color 0.2s ease-in-out',
    '&:hover':{
      backgroundColor: '#333'
    }
  },
});