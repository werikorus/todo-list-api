import { apiserverURL_v1, externalApiServerURL_v1, externalApiServerURL_v2 } from '../Helper/Helper';

export const getListsByUserId = async (userId) =>{
  try{
    const data = await fetch(`${externalApiServerURL_v2}/List`, {
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

export const getLists = async (userId) =>{
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

export const setNewList = async (newList) => {  
  try{
    const data = await fetch(`${externalApiServerURL_v1}/Lisst`, {
      headers: {
        'content-Type': 'application/json',
        'charset': 'uft-8',
      },
      "method": "POST",
      "body": newList
    }).then((response)=>{
      if(!response.ok){
        const data = response.json();
        return data;
      }
      return;
    }).catch((error)=>{
      console.log('Error Ocurred: ', JSON.parse(error));
      return error;
    });

    return data;
  }catch(error){
    console.log(error);
  } 
}