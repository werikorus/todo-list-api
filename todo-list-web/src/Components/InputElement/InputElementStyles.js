import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  justify-content: center;
  align-self: center;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  max-width: 300px;
  min-width: 100px;
  height: 3.5rem;
  color: var(--color-basic-text);
  background-color: var(--color-input-background);
  
  align-items: center;
  border-radius: 0.6rem 0 0 0.6rem;
  border: 1px solid white;
  outline: 0;
  padding-left: 53px;
  font-size: 1.5rem;
`

export const AddButton = styled.button`
  display: flexbox;
  width: 3.5rem;
  outline: 0;
  border: none;
  align-items: center;
  align-content: center;
  border-radius: 0 0.6rem 0.6rem 0;
  transition: 0.2s;
`;