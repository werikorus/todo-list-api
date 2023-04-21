import React from "react";
import { useStyles } from "./InputElementStyles";

const InputElement = (props) =>{
  const classes = useStyles();

  const {placeholder} = props
  return (
    <form onSubmit="return false;" className={classes.form}>
      <input placeholder={placeholder} className={classes.input}/>
      <button  className={classes.addButton}/>
    </form>    
  );
};

export default InputElement;
