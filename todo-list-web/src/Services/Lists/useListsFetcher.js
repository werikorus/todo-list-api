import { useMemo } from "react";
import { externalApiServerURL_v1 } from "../../Helper/Helper";
import { useAuthContext } from "../../Hooks/index"

export function useListsFetcher() {
  const { user } = useAuthContext();
  const userId = user?.given_name;

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

  const lists =  useMemo(
    () => data ?? [],
    [data]
  );

  return { lists };
};
