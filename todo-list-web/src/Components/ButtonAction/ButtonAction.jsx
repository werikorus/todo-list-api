import React from "react";
import { useStyles } from "./ButtonActionStyles";

const ButtonAction = (props) =>{
  const classes = useStyles();
  const { clickEvent, txt } = props;

  return (
    <button className={classes.button} onClick={clickEvent}>
      {txt}
    </button>
  );
};

export default ButtonAction;
