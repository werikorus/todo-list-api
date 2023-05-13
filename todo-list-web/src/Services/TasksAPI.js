import { externalApiServerURL_v1 } from '../Helper/Helper';

export const getTasks = async (userId) =>{
  try{
    if(!userId){
      alert('User id is EMPTY!');
      return;
    }
    const data = await fetch(`${externalApiServerURL_v1}/Task/UserId/${userId}`, {
      "method": "GET",
    });

    console.log('Atual data: ', data);

    if(data){
      const tasks = await data.json();
      return tasks;
    }
  }catch(error){
    console.log(error)
  }
}
