import React from "react";
import { useStyles } from "./PageNotFoundStyles";

export const PageNotFound = () => {
  const classes = useStyles();
  return (
    <body className={classes.body}>
      <div class="container" className={classes.container}>
        <i class="alert-icon fas fa-exclamation-triangle" 
          style={{
            color:'#f5d100',
            fontSize: '5rem',            
            marginBottom: '1rem'
          }}>            
        </i>
        <h1 className={classes.title}>
          Page Not Found (Error 404)
        </h1>
        <p className={classes.subtitle}>
          We're sorry, the page you requested could not be found. It may have been moved or deleted.
        </p>
        <p className={classes.subtitle}>Please check the URL for any typos, or go back to the 
          <a href="/Home" className={classes.homeButton}>homepage.</a>
        </p>
      </div>
    </body>
  );
};

export default PageNotFound;