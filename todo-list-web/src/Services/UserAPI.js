import { apiserverURL_v1 } from '../Helper/Helper';

export const getUserById = async (userId) =>{
  try{
    const data = await fetch(`${apiserverURL_v1}/User/${userId}`, {
      "method": "GET",
    });

    if(data){
      const user = await data.json();
      return user;
    }
  }catch(error){
    console.log(error)
  }
}

export const getUsers = async () =>{
  try{
    const data = await fetch(`${apiserverURL_v1}/User`, {
      "method": "GET",
    });

    if(data){
      const users = await data.json();
      return users;
    }
  }catch(error){
    console.log(error)
  }
}