import React from "react";
import { useStyles } from "./InputElementStyles";

const InputElement = (props) =>{
  const classes = useStyles();

  const {placeholder} = props
  return (
    <div className={classes.form}>
      <input placeholder={placeholder} className={classes.input}/>
      <button className={classes.addButton}>
        <img 
          className={classes.addImg} 
          src="https://i.ibb.co/dcQsdjy/addIMG.png" 
          alt="add" 
        />
      </button>
    </div>    
  );
};

export default InputElement;
