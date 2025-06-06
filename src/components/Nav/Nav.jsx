import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import React, { forwardRef, useContext } from 'react';
import MyContext from '../../context/MyContext';

const Nav = () => {

  const {currentUser } = useContext(MyContext)

  return (
    <div className={styles.nav}>
      <div>
        <img src='https://miro.medium.com/v2/resize:fit:800/1*fTYr1YT7akBlMMHhQDT_Bg.png' alt="Logo" />
      </div>
      <div>
        <NavLink to='/' className={styles.navLink}>Home</NavLink>
        <NavLink to='/cart' className={styles.navLink}>Cart</NavLink>
      </div>
      <div>
        {currentUser ? (
          <span className={styles.username}>Hello, {currentUser.name}</span>
        ) : (
          <NavLink to='/login' className={styles.button}>Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Nav;