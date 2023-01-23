import styled from "styled-components";

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
  backgro;und: var(--color-input-background);
  opacity: 85%;
`;