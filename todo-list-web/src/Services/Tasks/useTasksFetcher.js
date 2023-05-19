import { useMemo } from "react";
import { externalApiServerURL_v1 } from "../../Helper/Helper";

export function useTasksFetcher(userId) {
      
  const data = fetch(`${externalApiServerURL_v1}/Task/UserId/${userId}`, {
    "method": "GET",
  }).then((response) => response.json())
  .catch((error) => console.log(error));

  const tasks = useMemo(() => data.json() ?? {}, [data]);

  return { tasks };
};