import styled from 'styled-components'

export const Button = styled.button`
  min-width: 5rem;
  height: 2rem;
  text-decoration: none;
  background-color: var(--color-input-background);
  border: none;
  border-radius: 5px;
  transition: 0.2s;
  color: var(--color-basic-text);

  &:hover{
    background-color: var(--color-line-in-white);
  }
`