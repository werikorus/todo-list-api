import { apiserverURL_v1, externalApiServerURL_v1 } from '../Helper/Helper';

export const getListsByUserId = async (userId) =>{
  try{
    const data = await fetch(`${externalApiServerURL_v1}/List`, {
      "method": "GET",
    });

    if(data){
      const lists = await data.json();   
      return lists;   
    }
  }catch(error){
    console.log(error)
  }
}

export const getLists = async () =>{
  try{
    const data = await fetch(`${apiserverURL_v1}/List`, {
      "method": "GET",
    });

    if(data){
      const lists = await data.json();
      return lists;
    }
  }catch(error){
    console.log(error)
  }
}
