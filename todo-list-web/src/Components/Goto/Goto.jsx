import React from "react";
import { Button } from "./GotoStyles";
import { Link } from "react-router-dom";

const Goto = (props) =>{
  const { destine, txt } = props;
  return (
    <Button>
      <Link to={destine}>
        {txt}
      </Link>
    </Button>
  );
};

export default Goto;
