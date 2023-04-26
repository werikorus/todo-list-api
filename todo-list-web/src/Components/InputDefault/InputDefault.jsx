import React from "react";
import { useStyles } from "./InputDefaultStyles";

const InputDefault = (props) =>{
  const classes = useStyles();
  const {placeholder, width , type = 'text'} = props
  return (
    <input 
      type={type} 
      style={{width: width}} 
      placeholder={placeholder} 
      className={classes.input}
    />    
  );
};

export default InputDefault;
