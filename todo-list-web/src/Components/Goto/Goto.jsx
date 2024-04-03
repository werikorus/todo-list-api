import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./GotoStyles";

const Goto = (props) =>{
  const classes = useStyles();

  const { destiny, txt } = props;
  return (
    <Link to={destiny} className={classes.button}>
      {txt}     
    </Link>
  );
};

export default Goto;
