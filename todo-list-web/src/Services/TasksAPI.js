import { apiserverURL_v1 } from '../Helper/Helper';

export const getTasks = async (userId) =>{
  try{
    const data = await fetch(`${apiserverURL_v1}/Task/UserId/${userId}`, {
      "method": "GET",
    });

    if(data){
      const tasks = await data.json();
      return tasks;
    }
  }catch(error){
    console.log(error)
  }
}
