import React, {useEffect, useState} from "react";
import { useStyles } from "./SubscribeStyles"
import ButtonAction from "../../Components/ButtonAction/ButtonAction";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { initialValues, validationsSchema } from "../../Helper/Helper";
import { setNewUser } from "../../Services/UserAPI";
import { GetAtualDate } from "../../Helper/Helper";

const Subscribe = () => {
  const classes = useStyles();
  const [saving, isSaving] = useState(false);

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout( async () => {      
      const newUser = {
        ...values,
        dateCreate: GetAtualDate(),
        dateUpdate: GetAtualDate(),
      };      
      console.log(JSON.stringify(newUser));
      await setNewUser(JSON.stringify(newUser));
      setSubmitting(false);
    }, 400);
  };
  
  return (
    <body className={classes.body}>      
      <main className={classes.main}>
        <section className={classes.section}>
          <img 
            className={classes.avatarProfile} 
            src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" 
            alt="profile" 
          /> 
          <span>New User</span>
          <div className={classes.subscribeArea}>
            <Formik
              initialValues={initialValues}              
              validationSchema={validationsSchema}
              onSubmit={onSubmit}
              validateOnMount            
            >
              {({values, isValid, isSubmitting, resetForm}) => (
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

                <Field className={classes.input} name="role" placeholder="Role"  as="select">
                  <option select>Role</option>
                  <option value={'Amin'}>Admin</option>
                  <option>User</option>   
                </Field>
                <ErrorMessage 
                  name="role" 
                  style={{color: "red", fontSize: "15px" }}
                  component="span"
                />  
                <div className={classes.buttonArea}>
                  <ButtonAction txt="Clear" clickEvent={resetForm}/>    
                  <ButtonAction txt="Subscribe"/>    
                </div>  
              </Form>
              )}
            </Formik>        
          </div>      
        </section>
      </main>
    </body>  
  );
}

export default Subscribe;
