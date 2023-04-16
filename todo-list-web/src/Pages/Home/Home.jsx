import React  from "react";
import { useStyles } from "./HomeStyles";
import Aside from "../../Components/Aside";
import PageHeader from "../../Components/PageHeader";
import Board from "../../Components/Board";
import { getListsByUserId } from "./../../Services/ListsAPI";

import { useState, useEffect } from "react";
import { useRef } from "react";
import { itemsList } from  "../../Mock/ItemsListMock";

const Home = () => {
  const list = useRef([]);
  const [currentLists, setCurrentLists] = useState([]);

  const idUser = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
  
  //useEffect(()=>{(
  //  async () =>{
  //    const data = await getListsByUserId(idUser);
  //    list.current = data;
  //    setCurrentLists(list.current);
  //  })();
  //},[]);

  const classes = useStyles();

  return(   
    <>
      <PageHeader title="MY TO DO"/>
      <main className={classes.main}>
        <Aside Items={currentLists}/> 
        <Board />
      </main>    
    </>     
  );
}

export default Home;
