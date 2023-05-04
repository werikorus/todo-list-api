import { createContext, useEffect, useState } from "react"; 
import { login, setNewUser } from "../Services/UserAPI";
import { gapi } from "gapi-script";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  
  //useEffect(()=>{
  //  const userToken = localStorage.getItem("user_token");
  //  const userStorage = localStorage.getItem("user_db");
  
  //  if(userToken && userStorage){
  //    const hasUser = JSON.parse(userStorage)?.filter(
  //      (user) => user.email === JSON.parse(userToken).email
  //    );
  
  //    if(hasUser) setUser(hasUser[0]);
  //  }
  //},[]);

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
      setUser({ email, password });
      return;
    };
  }

  const signUp = async (user) => {
    const newUser = {
      ...user,
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
