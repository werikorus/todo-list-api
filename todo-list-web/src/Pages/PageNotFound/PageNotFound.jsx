import React from "react";

export const PageNotFound = () => {
  return (
    <div class="container">
      <i class="alert-icon fas fa-exclamation-triangle"></i>
      <h1 style="color: black;">Page Not Found (Error 404)</h1>
      <p>We're sorry, the page you requested could not be found. It may have been moved or deleted.</p>
      <p>Please check the URL for any typos, or go back to the <a href="/">homepage</a>.</p>
    </div>
  );
};

export default PageNotFound;