import React from "react";
import { useStyles } from "./ButtonActionStyles";

const ButtonAction = (props) =>{
  const classes = useStyles();
  const { clickEvent, txt, disabled } = props;

  return (
    <button 
      type="submit" 
      className={classes.button} 
      onClick={clickEvent}
      disabled={disabled}
    >
      {txt}
    </button>
  );
};

export default ButtonAction;
