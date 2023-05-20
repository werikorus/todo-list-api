import { externalApiServerURL_v1 } from '../../Helper/Helper';

export const getListsByUserId = async (userId) =>{
  var data = []

  try{
    await fetch(`${externalApiServerURL_v1}/List/UserId/${userId}`, {      
      "headers": {
        'content-Type': 'application/json',
        'charset': 'uft-8',
      },
      "method": "GET",
      "signal": new AbortController().signal
    }).then((response) => {
      if(response.ok){
        data = response.json();
        return data;
      };
    }).catch((error) => console.log(error));
    
  }catch(error){
    console.log(error);
    return error;
  }

  return data;
};

export const setNewList = async (newList) => {  
  try{
    await fetch(`${externalApiServerURL_v1}/List`, {
      headers: {
        'content-Type': 'application/json',
        'charset': 'uft-8',
      },
      "method": "POST",
      "body": newList
      }).then((response)=>{
        if(response.ok){
          const data = response.json();
          return data;
        }        
      }).catch((error)=>{
        console.log('Error Ocurred when save new List: ', JSON.parse(error));
        return error;
      });
  }catch(error){
    console.log(error);
    return error;
  } 
};