import { apiserverURL_v1 } from '../Helper/Helper';
import { externalApiServerURL_v1 } from '../Helper/Helper';
import { externalApiServerURL_v2 } from '../Helper/Helper';

export const getUserById = async (userId) =>{
  try{
    const data = await fetch(`${apiserverURL_v1}/User/${userId}`, {
      "method": "GET",
    });

    if(data){
      const user = await data?.json();
      return user;
    }
  }catch(error){
    console.log(error)
  }
}

export const login = async (user) =>{
  try{
    const data = await fetch(`${externalApiServerURL_v2}/Authenticator/Login`, {
      headers: {
        'Content-Type': 'application/json', 
        'charset': 'utf-8',
      },
      "method": "POST",
      "body": user,
    }).then((response) => {   
      if(response.ok){
        const data = response.json(); 
        return data;
      };
      
      return;      
    }).catch((error)=>{
      console.log('Error Ocurred: ', error);
    });

    return data;
  }catch(error){
    console.log(error);
  }
}

export const setNewUser = async (valuesNewUser) => {
  try{
    return await fetch(`${externalApiServerURL_v1}/User`, {
      headers: {
        'Content-Type': 'application/json', 
        'charset': 'utf-8',
      },
      "method": "POST",
      "body": valuesNewUser,      
      }).then((response)=>{
        if(Response.ok){          
          const data = response.json();
          return data;
        }else{
          return response;
        }
        
      }).catch((error)=>{
        console.log('Error Ocurred: ', error);
      });
  }catch(error){
    console.log(error);
  }
}