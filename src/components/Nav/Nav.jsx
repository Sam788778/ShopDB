import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState, forwardRef } from 'react';

const Nav = forwardRef((props, ref) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  return (
    <div className={styles.nav} ref={ref}>
      <div>
        <img src="https://miro.medium.com/v2/resize:fit:800/1*fTYr1YT7akBlMMHhQDT_Bg.png" alt="Logo" />
      </div>
      <div>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/cart" className={styles.navLink}>
          Cart
        </NavLink>
      </div>
      <div>
        {currentUser ? (
          <span className={styles.username}>Hello, {currentUser.name}</span>
        ) : (
          <NavLink to="/login" className={styles.button}>
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
});

export default Nav;