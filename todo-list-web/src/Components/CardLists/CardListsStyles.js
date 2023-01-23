import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  border-radius: 3px;
  margin: 3px; 
  transition: 0.4s;
  justify-content: center;
  justify-items: center;
  display: flexbox;
  
  &:hover{
  cursor: pointer;
  background-color: var(--color-header-background);
  background-image: var(--color-header-background-image);
  color: white;
  }
`;