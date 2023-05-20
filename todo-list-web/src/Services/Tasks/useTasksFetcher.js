import { useMemo } from "react";
import { externalApiServerURL_v1 } from "../../Helper/Helper";

//const id = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
export function useTasksFetcher (userId) {
  let data = null;
  fetch(`${externalApiServerURL_v1}/List/UserId/${userId}`, {      
    "headers": {
      'content-Type': 'application/json',
      'charset': 'uft-8',
    },
    "method": "GET",
    "signal": new AbortController().signal
  }).then((response) => {
    if(response.ok){
      data = response.json();      
    };
  }).catch((error) => console.log(error));

  const tasks =  useMemo(
    () => data ?? [],
    [data]
  );

  return { tasks };
};
