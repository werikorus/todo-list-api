import React  from "react";
import { useStyles } from "./HomeStyles";
import PageHeader from "../../Components/PageHeader";
import Board from "../../Components/Board";
import PageFooter from "../../Components/PageFooter/PageFooter";

const Home = () => {
  const classes = useStyles();
  return(   
    <>      
      <PageHeader title="MY TO DO"/>
      <main className={classes.main}>        
        <Board />        
      </main> 
      {/*<PageFooter />   */}
    </>     
  );
}

export default Home;
