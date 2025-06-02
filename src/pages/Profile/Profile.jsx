import React from 'react';
import styles from './Profile.module.css';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  return (
    <div className={styles.profile}>
      <h1>Profile</h1>
      <div className={styles.details}>
        <h1>Name: {location.state.name}</h1>
        <p>Email: {location.state.email}</p>
      </div>
    </div>
  );
};

export default Profile;