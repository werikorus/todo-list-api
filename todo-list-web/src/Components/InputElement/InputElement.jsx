import React from "react";
import { Input } from "./InputElementStyles";

const InputElement = (props) =>{
  const {placeholder} = props
  return (
    <Input placeholder={placeholder}/>
  );
};

export default InputElement;
