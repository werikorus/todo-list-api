import React  from "react";
import { FooterContent, TextArea, MyWebPage } from './PageFooterStyles';
import { Typography } from './../Typography';

export const PageFooter = () =>{
  return (
    <FooterContent>
      <TextArea>
        <Typography str={"Powered by"} fontSize="1rem" color="white"/>        
          <MyWebPage href="https://www.linkedin.com/in/werik-santos-5066aab5/">Werik Santos</MyWebPage>        
        <MdComputer color="white" size={45}/>           
      </TextArea>
    </FooterContent>
  );
}
