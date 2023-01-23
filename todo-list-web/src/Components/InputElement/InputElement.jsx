import React from "react";
import {Form, Input, AddButton } from "./InputElementStyles";

const InputElement = (props) =>{
  const {placeholder} = props
  return (
    <Form onSubmit={"return false;"}>
      <Input placeholder={placeholder} />
      <AddButton />
    </ Form>    
  );
};

export default InputElement;
