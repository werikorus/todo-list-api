import React from "react";
import ReactLoading from 'react-loading';

const Loading = () =>{
  return (
    <>    
      <h1>Loading...</h1>
      <ReactLoading 
        type={"cylon"} 
        color="#8BC6EC" 
        height={100} 
        width={100}
      />
    </>
  );
};

export default Loading;