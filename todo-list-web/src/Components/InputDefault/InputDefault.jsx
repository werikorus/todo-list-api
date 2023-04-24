import React from "react";
import { useStyles } from "./InputDefaultStyles";

const InputDefault = (props) =>{
  const classes = useStyles();
  const {placeholder, width} = props
  return (
    <input style={{width: width}} placeholder={placeholder} className={classes.input}/>    
  );
};

export default InputDefault;
