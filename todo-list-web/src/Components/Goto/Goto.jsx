import React from "react";
import { Link } from "react-router-dom";
import { Button } from './GotoStyles';

const Goto = (props) =>{
  const { destiny, txt } = props;
  return (
    <Button>
      <Link to={destiny}>
        {txt}
      </Link>
    </Button>
  );
};

export default Goto;
