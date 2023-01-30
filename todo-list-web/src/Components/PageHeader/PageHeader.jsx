import React from "react";
import { HeaderPage, Title } from './PageHeaderStyles';
import InputElement from "../InputElement";

const PageHeader = (props) => {
  const {title} = props;
  return (
    <HeaderPage>
      <Title>{title}</Title>       
      <InputElement placeholder="type a text here.."/>
    </HeaderPage>
  );
};

export default PageHeader;