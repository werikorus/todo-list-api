import { useMemo } from "react";
import { externalApiServerURL_v1 } from "../../Helper/Helper";
import useAuth from "../../Hooks/useAuth";

export function useTasksFetcher() {
  const { user } = useAuth();
  const userId = user?.given_name;

  let data = null;
  fetch(`${externalApiServerURL_v1}/Tasks/UserId/${userId}`, {      
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
