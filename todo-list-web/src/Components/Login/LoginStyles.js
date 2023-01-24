import styled from 'styled-components';

export const Main = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(79, 78, 78, 0.522) 1px 0.1px 10px;
`;

export const DivArea = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  color: var(--color-input-background);
`;

export const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 45%;
  height: 100%;
  align-items: center;
  border: solid 1px white;
  border-radius: 0 10px 10px 0;
`;

export const ButtonsArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`
export const InputArea = styled.div`
  display: flex;
  justify-content: space-between;
  /*background-color: yellow;*/
  align-items: center;
`;

export const InputLogin = styled.input`
  height: 2rem;
  align-content: center;
  margin-left: 7px;
  color: var(--color-basic-text);
  background-color: var(--color-input-background);
  border-radius: 0.5rem;
  border: 1px solid white;
  outline: 0;
  font-size: 1rem;
  padding-left: 0.8rem;
`;

export const Label = styled.label`
  justify-self: left;
  padding-top: 1rem;
`;

export const DivImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  border: none;
  position: static;
`;