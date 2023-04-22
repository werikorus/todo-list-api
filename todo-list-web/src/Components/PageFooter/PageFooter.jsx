import React from "react";
import { useStyles } from "./PageFooterStyles";


const PageFooter = () => {
  const classes = useStyles();

  return(
    <footer className={classes.pageFooter}>
      <div className={classes.copyright}>
        <p>CopyRight &copy;</p>
        <p>Werik Santos - 2023</p>
      </div>     
    </footer>
  );
};

export default PageFooter;