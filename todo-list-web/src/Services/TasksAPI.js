import { externalApiServerURL_v1 } from '../Helper/Helper';

export const getTasks = async (userId) =>{
  try{
    if(!userId){      
      return;
    }
    
    const data = await fetch(`${externalApiServerURL_v1}/TaskList/UserId/${userId}`, {
      "method": "GET",
    });

    console.log('Atual Tasks: ', data);

    if(data){
      const tasks = await data.json();
      return tasks;
    }
  }catch(error){
    console.log(error)
  }
}
