import React from "react";
import { Link } from "react-router-dom";
import {Button} from '../Goto/GotoStyles';

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
