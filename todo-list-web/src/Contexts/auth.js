import { createContext, useEffect, useState } from "react"; 
import { login, setNewUser } from "../Services/UserAPI";
import { gapi } from "gapi-script";
import { DecodeToken } from "../Helper/TokenDecode";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(()=>{
    const userToken = localStorage.getItem("user_token");
  
    if(userToken){
      setUser(JSON.parse(userToken));      
    }
  },[]);

  const signIn =  async (email, password) => {
    const user = {
      email: email,
      password: password
    };
    const response = await login(JSON.stringify(user));

    if(!response){
      return "Email or password incorrect!";
    }

    if(response){
      localStorage.setItem("user_token", JSON.stringify({email, access_token: response.access_token}));
      
      const decoded = DecodeToken(response.access_token);
      console.log('user decoded: ', decoded);
      
      setUser(decoded);       
      return;
    };
  }

  const signUp = async (userModel) => {
    const newUser = {
      ...userModel,
      dateCreate: new Date(),
      dateUpdate: new Date(),
    };

    let response = await setNewUser(JSON.stringify(newUser));
    return response;    
  }

  const signOut = () => {
    //var auth2 = gapi.auth2.getAuthInstance();
    //if(auth2!=null){
    //  auth2.signOut().then(function () {
    //    console.log('User signed out.');
    //  });
    //};
    
    setUser(null);
    localStorage.removeItem("user_token");    
  }

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
