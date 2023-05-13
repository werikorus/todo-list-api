import jwt_decode from 'jwt-decode';

export const DecodeToken = (token) => {  
  const decoded = jwt_decode(token);
  return  decoded;
}