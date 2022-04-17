import React from "react";
import { Header, TitleArea, TextArea} from './PageHeaderStyles.js';
import  { Typography }  from "../Typography";

export const PageHeader = () =>{
  return (
    <Header>
      <TextArea>        
        <TitleArea>
          <Typography str={"NewsGame"} fontSize="4.5rem"/>
        </TitleArea>        
      </TextArea>           
    </Header>
  );
}
