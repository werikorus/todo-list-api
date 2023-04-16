import styled from "styled-components";
import { createUseStyles } from "react-jss";

export const BoardArea = styled.div`
  display: flexbox;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const AreaItems = styled.ul`
  justify-content: center;
  min-width: 200px;
  padding-left: 0rem;
`;

export const Items = styled.li`
  list-style: none;
  color: var(--color-basic-text);
  display: flex;
  margin-bottom: 2mm;
  font-size: 1.3rem;
  border-radius: 2px;
  transition: 0.2s;
  background-color: var(--color-footer);
  justify-content: space-between;  
  padding: 10px;
  border-radius: 0.3rem;
  box-shadow: rgba(79, 78, 78, 0.522) 1px 0.1px 10px;

  &:hover{
  background-color: var(--color-header-background);
  background-image: var(--color-header-background-image);
  color: white;
  }
`;

export const Input = styled.input`
  height: 1rem;
  width: 1rem;
  margin: 0 3mm 0 3mm;
  text-align: center;
  align-self: center;
  align-items: center;

  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
`;

export const Button = styled.button`
  height: 4.5mm;
  width: 4.5mm;
  margin: 0 3mm 0rem 3mm;
  align-content: center;
  text-align: center;
  align-self: center;
  outline: none;
  border: none;
  border-radius: 0.8mm;
  background: var(--color-input-background);
  opacity: 85%;
`;

export const useStyles = createUseStyles({
  boardArea: {
    display: 'flexbox',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  areaItems:{
    justifyContent: 'center',
    minWidth: '200px',
    paddingLeft: '0rem',
  },
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
  },
  button:{
    height: '4.5mm',
    width: '4.5mm',
    margin: '0 3mm 0rem 3mm',
    alignContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    outline: 'none',
    border: 'none',
    borderRadius: '0.8mm',
    background: 'var(--color-input-background)',
    opacity: '85%'
  }

});