import React from 'react';
import styles from './Login.module.css';
import { Field, Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

const Login = ({ users, setCurrentUser }) => {
  const navigate = useNavigate();

  const login = (values) => {
    const user = users.find(user => user.email === values.email && user.password === values.password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      navigate(`/profile/${user.id}`, { state: user });
    } else {
      navigate('/register');
    }
  };

  return (
    <div className={styles.login}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={login}
      >
        <Form>
          <Field type="email" name="email" placeholder="Email" className={styles.input} />
          <Field type="password" name="password" placeholder="Password" className={styles.input} />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;