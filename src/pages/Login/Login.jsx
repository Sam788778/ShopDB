import React, { useRef } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ users }) => {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate(`/profile/${user.id}`, { state: user });
    } else {
      navigate('/register');
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" ref={emailRef} className={styles.input} required />
        <input type="password" placeholder="Password" ref={passwordRef} className={styles.input} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;