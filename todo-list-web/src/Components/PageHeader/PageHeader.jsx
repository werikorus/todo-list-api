import React from "react";
import { HeaderPage } from './PageHeaderStyles';

const PageHeader = (props) => {
  const {title} = props;
  return (
    <HeaderPage>
      <h1>{title}</h1>
    </HeaderPage>
  );
};

export default PageHeader;