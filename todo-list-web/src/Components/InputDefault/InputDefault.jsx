import React from "react";
import { useStyles } from "./InputDefaultStyles";

const InputDefault = (props) =>{
  const classes = useStyles();
  const {
    placeholder, 
    width,
    type = 'text',
    OnChange
  } = props;

  return (
    <input 
      type={type} 
      style={{width: width}} 
      placeholder={placeholder} 
      className={classes.input}
      onChange={OnChange}
    />    
  );
};

export default InputDefault;
