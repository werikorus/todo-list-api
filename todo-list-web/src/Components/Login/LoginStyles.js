import styled from 'styled-components';

export const Main = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  align-items: center;
  border: solid 1px white;
  border-left: none;
  border-radius: 0 10px 10px 0;
  background-color: var(--color-background);
`;

export const ButtonsArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`
export const InputArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputLogin = styled.input`
  height: 2rem;
  align-content: center;
  margin-left: 7px;
  color: var(--color-basic-text);
  background-color: var(--color-input-background);
  border-radius: 0.5rem;
  border: 1px solid var(--color-header-background);
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

export const Title = styled.h2`
  color: var(--color-header-background);
`;
export const Line = styled.hr`
  margin-top: -30px;
  color: var(--color-header-background);
  width: 60%;
`;

export const Subtitle = styled.span`
  margin-top: -30px;
  color: var(--color-header-background);
`;

export const GoogleLogin = styled.div`
  height: 23px;
  color: black;
  border: 1px solid var(--color-header-background);
  width: 10rem;
  border-radius: 3px;
  text-align: center;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 13px;
  cursor: pointer;


  &:hover{
    background-color: var(--color-line-in-white);    
  }
`;