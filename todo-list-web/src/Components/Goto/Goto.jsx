import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./GotoStyles";

const Goto = (props) =>{
  const classes = useStyles();

  const { destiny, txt } = props;
  return (
    <button className={classes.button}>
      <Link to={destiny}>
        {txt}
      </Link>
    </button>
  );
};

export default Goto;
