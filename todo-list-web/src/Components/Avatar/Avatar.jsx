import React from "react";
import { useStyles } from "./Avatar.styles";

const Avatar = () => {
  const classes = useStyles();

  return(
    <div className={classes.divPhoto}>
      <h1>This is Avatar component</h1>
    </div>    
  );
};

export default Avatar;
