import { Field, Form, Formik } from 'formik';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Register = ({ setUsers}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.register}>
      <h1 className={styles.title}>Register</h1>
      <Formik
        initialValues={{ Name: '', LastName: '', email: '', password: '', confirmPassword: '' }}
        onSubmit={(values) => {
          const newUser = {
            id: Date.now(),
            name: values.Name,
            lastName: values.LastName,
            email: values.email,
            password: values.password
          };
          setUsers(prev => {
            const updatedUsers = [...prev, newUser];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return updatedUsers;
          });
          localStorage.setItem('currentUser', JSON.stringify(newUser));
          navigate(`/profile/${newUser.id}`, { state: newUser });
        }}
      >
        <Form className={styles.form}>
          <Field className={styles.input} name="Name" placeholder="Name" />
          <Field className={styles.input} name="LastName" placeholder="Last Name" />
          <Field className={styles.input} name="email" type="email" placeholder="Email" />
          <Field className={styles.input} name="password" type="password" placeholder="Password" />
          <Field className={styles.input} name="confirmPassword" type="password" placeholder="Confirm Password" />
          <button className={styles.button} type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;