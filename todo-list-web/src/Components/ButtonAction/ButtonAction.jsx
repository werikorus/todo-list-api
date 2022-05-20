import React from "react";
import { Button } from "./ButtonActionStyles";

const ButtonAction = (props) =>{
  const { clickEvent, txt } = props;
  return (
    <Button onClick={clickEvent}>
      {txt}
    </Button>
  );
};

export default ButtonAction;
