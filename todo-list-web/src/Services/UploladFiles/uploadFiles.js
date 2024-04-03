import { externalApiServerURL_v1 } from '../../Helper/Helper';

export const setNewFile = async (valueNewFile) => {
  let data = [];
  try{
    await fetch(`${externalApiServerURL_v1}/fileUpload`, {
      "headers": {
        'Content-Type': 'application/json', 
        'charset': 'utf-8',
      },
      "method": "POST",
      "body": JSON.stringify(valueNewFile),      
      }).then((response) => {
        if(response.ok){          
          data = response.json();     
          return data;      
        };      
      }).catch((error)=>{
        console.log('Error Ocurred when upload file: ', error);
      });
  }catch(error){
    console.log(error);
    return error;
  }  

  return data; 
}
