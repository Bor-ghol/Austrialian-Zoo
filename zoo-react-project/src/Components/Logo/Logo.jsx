import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Logo/Logo.module.css';

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <h1>🦘 Australia Zoo</h1>
    </Link>
  );
};

export default Logo;
