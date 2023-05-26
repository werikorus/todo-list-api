import React  from "react";
import PageHeader from "../../Components/PageHeader";
import Board from "../../Components/Board";
import PageFooter from "../../Components/PageFooter/PageFooter";

const Home = () => {  
  return(   
    <>      
      <PageHeader title="MY TO DO"/>      
      <Board />
      <PageFooter />  
    </>     
  );
}

export default Home;
