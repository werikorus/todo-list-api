import React, { useState, useEffect} from "react";
import { useStyles } from "./SubscribeStyles"
import ButtonAction from "../../Components/ButtonAction/ButtonAction";
import { Formik, Field, Form, ErrorMessage, replace } from "formik";
import { initialValues, validationsSchema } from "../../Helper/Helper";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Hooks";
import { setNewFile } from "../../Services/UploladFiles";
import  AvatarProfile  from '../../Components/AvatarProfile';
import {default_img_user} from '../../Helper/Helper';
import 'react-toastify/dist/ReactToastify.css';

const Subscribe = () => {
  const classes = useStyles();
  const [saving, setSaving] = useState(false);
  const [srcImg, setSrcImg] = useState('');
  const { signUp } = useAuthContext();
  const navigate = useNavigate();
  
  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    
    setTimeout(async () => {    
      setVisibilityLoading();    
      setSaving(true);

      const urlImage = await setNewFile(srcImg);
      let newUser = {
        ...values,
        dateCreate: new Date(),
        dateUpdate: new Date(),
        UrlAvatar: urlImage ? urlImage : `${default_img_user}`,
      };     
      
      if(newUser.role==='Role'){
        toast.info('You need to choose a role!');        
        return;
      };

      let response = await signUp(newUser);

      if(!response.ok){
        notifyFail();
        return;
      };

      setSaving(false);           
      notifySuccess();        
      setVisibilityLoading();            
    }, 1000);
    
    setSubmitting(false);
    setTimeout(() => {
      navigate('/');  
    }, 6000);    
  };

  const notifySuccess = () => toast.success('User successfully registered!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  });

  const notifyFail = () => toast.error('Failed when registering new user!', {    
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const setVisibilityLoading = async () => {
    const subscribeArea = document.getElementById('subcribeArea');
    const loadingComponent = document.getElementById('loadingComponent');
    
    if(saving){      
      subscribeArea.style.visibility = '20%';
      loadingComponent.style.visibility = '100%';
    }else{
      subscribeArea.style.visibility = '100%';
      loadingComponent.style.visibility = '0%';
    };
  };

  return (
    <body className={classes.body}>      
      <main className={classes.main}>        
        <section className={classes.section}> 
          <div className={classes.subscribeArea} id="subcribeArea">
            <div className={classes.avatarProfile} >
              <AvatarProfile setSrcImg={setSrcImg}/>
            </div>                
            <Formik
              initialValues={initialValues}              
              validationSchema={validationsSchema}
              onSubmit={onSubmit}
              validateOnMount            
            >
              {({ values, isValid, isSubmitting, resetForm }) => (
                <Form className={classes.form}>
                <Field 
                  className={classes.input}
                  type="text"
                  name="name"
                  placeholder='Name'                  
                />
                <ErrorMessage 
                  name="name" 
                  style={{color: "red", fontSize: "15px" }}
                  component="span"
                />  

                <Field 
                  className={classes.input} 
                  name="email"
                  placeholder="Email" 
                  type="email"
                />
                <ErrorMessage 
                  name="email"                   
                  style={{color: "red", fontSize: "15px" }}
                  component="span"
                />  

                <Field 
                  className={classes.input} 
                  name="password"
                  placeholder="Password" 
                  type="password"
                />
                <ErrorMessage 
                  name="password" 
                  style={{color: "red", fontSize: "15px" }}
                  component="span"
                />  

                <Field className={classes.select} name="role" placeholder="Role" as="select">
                  <option defaultChecked className={classes.options}>Role</option>
                  <option value='Admin' className={classes.options}>Admin</option>
                  <option value='User' className={classes.options}>User</option>                  
                </Field>
                <ErrorMessage 
                  name="role" 
                  style={{color: "red", fontSize: "15px" }}
                  component="span"
                />  
                <div className={classes.buttonArea}>
                  <ButtonAction txt="Clear" clickEvent={resetForm}/>    
                  <ButtonAction txt="Subscribe" disabled={isSubmitting}/>                      
                </div>  
                </Form>
              )}
            </Formik><code></code>
            <div>              
              <ToastContainer />
            </div>
          </div>      
        </section>
      </main>
    </body>  
  );
}

export default Subscribe;
