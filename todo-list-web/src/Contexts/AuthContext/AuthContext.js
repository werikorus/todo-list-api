import { createContext, useEffect, useState } from "react"; 
import PropTypes from 'prop-types';
import { login, setNewUser } from "../../Services/User/UserAPI";
import { gapi } from "gapi-script";
import { DecodeToken } from "../../Helper/TokenDecode";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [ localizedUser, setLocalizedUser ] = useState(false);
  
  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("user_token")); 
    if(userToken !== null){
      setUser(DecodeToken(userToken.access_token));    
    }
  },[localizedUser]);

  const signIn =  async (email, password) => {
    const user = {
      email: email,
      password: password
    };
    const response = await login(user);

    if(!response){
      return "Email or password incorrect!";
    }

    if(response){
      localStorage.setItem("user_token", JSON.stringify({access_token: response.access_token}));
      const decoded = DecodeToken(response.access_token);
      setUser(decoded);     
      return;
    };

    setLocalizedUser(true);
  }

  const signUp = async (userModel) => {
    const newUser = {
      ...userModel,
      dateCreate: new Date(),
      dateUpdate: new Date(),
    };

    let response = await setNewUser(newUser);
    return response;    
  }

  const signOut = () => {    
    //var auth2 = gapi.auth2.getAuthInstance();
    //if(auth2!=null){
    //  auth2.signOut().then(function () {
    //    console.log('User signed out.');
    //  });
    //};
    
    setUser({});
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

AuthContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};