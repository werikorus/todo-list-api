import { useContext } from "react";

import { ListsContext } from "../../Contexts/ListsContext";

export const useListsContext = () => useContext(ListsContext);
