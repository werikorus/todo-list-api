import * as yup from 'yup';
export const apiserverURL_v1 = 'https://localhost:7237/api/v-1';
export const apiserverURL_v2 = 'https://localhost:7237/api/v-2';

export const externalApiServerURL_v1 = 'https://todo-list-api-backend.azurewebsites.net/api/v-1';
export const externalApiServerURL_v2 = 'https://todo-list-api-backend.azurewebsites.net/api/v-2';

export const linkLoginImage = 'https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

export const initialValues = {
  name: '',
  password: '',  
  email: '',  
  role: '',
};

export const validationsSchema = yup.object().shape({
  name: yup
    .string('Enter your name')
    .required('Name is required!'),
  email: yup
    .string('Enter your email')
    .required('Enter a valid email'),
  password: yup
    .string('Enter your password')
    .required('Password is required!'),
  role: yup
    .string('Enter your role for Authorizations')
    .max(8, 'Your password should have only 8 characters')
    .required('Role is required!'),
});

export const  GetActualDate = () =>{
  const date = new Date();
  const day = date.getUTCDate();
  const month = date.getUTCMonth()+1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const mill = date.getMilliseconds();

  const today = `${year}-${month}-${day}T${hour}:${min}:${sec}.${mill}Z`;
  return today;
 };

export const default_img_user = 'https://cseastus1003200035e0b130.blob.core.windows.net/user-avatar/b8da7497-8dc6-4779-8cce-efc6cb7dadaa.jpg';

//for loading modal component
// https://www.kindacode.com/article/react-show-a-loading-dialog/