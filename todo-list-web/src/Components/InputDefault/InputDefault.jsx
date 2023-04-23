import React from "react";
import { useStyles } from "./InputDefaultStyles";

const InputDefault = (props) =>{
  const classes = useStyles();
  const {placeholder} = props
  return (
    <input placeholder={placeholder} className={classes.input}/>    
  );
};

export default InputDefault;
