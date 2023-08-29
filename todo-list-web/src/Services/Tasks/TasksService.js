import { externalApiServerURL_v1 } from '../../Helper/Helper';

export const getTasksByListIdAndUserId = async (listId, userId) =>{
  var data = [];

  try{
    await fetch(`${externalApiServerURL_v1}/TaskList/ListId=${listId}&UserId=${userId}`, {     
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
    }).catch((error) => console.log(`Error when request tasks: ${error}`));
    
  }catch(error){
    console.log(error);
    return error;
  }

  return data;
};

export const setNewTask = async (newTask) =>{
  try{
    await fetch(`${externalApiServerURL_v1}/TaskList`, {
      headers: {
        'content-Type': 'application/json',
        'charset': 'uft-8',
      },
      "method": "POST",
      "body": JSON.stringify(newTask)
      }).then((response)=>{
        if(response.ok){
          const data = response.json();
          return data;
        }        
      }).catch((error)=>{
        console.log('Error Ocurred when save new Task: ', JSON.parse(error));
        return error;
      });
  }catch(error){
    console.log(error);
    return error;
  };
};

export const deleteTask = async (taskId) => {
  let deleteSucessFully = false;

  try{
    await fetch(`${externalApiServerURL_v1}/TaskList/${taskId}`, {
      headers: {
        'content-Type': 'application/json',
        'charset': 'uft-8',
      },
      "method": "DELETE",
      signal: new AbortController().signal
      }).then((response)=>{
        deleteSucessFully = response.ok;
      }).catch((error)=>{
        console.log('Error Ocurred when delete task: ', JSON.parse(error));
        deleteSucessFully = false;
      });
      
  }catch(error){
    console.log(error);
    return false;
  };

  return deleteSucessFully;
};
