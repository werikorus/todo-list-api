import { useContext } from "react";
import { AuthContext } from "../../Contexts/index";

export const  useAuthContext = () => useContext(AuthContext);
