import { externalApiServerURL_v1 } from '../../Helper/Helper';

export const setNewFile = async (valueNewFile) => {
  try{
    return await fetch(`${externalApiServerURL_v1}/FileUpload`, {
      headers: {
        'Content-Type': 'application/json', 
        'charset': 'utf-8',
      },
      "method": "POST",
      "body": JSON.stringify(valueNewFile),      
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