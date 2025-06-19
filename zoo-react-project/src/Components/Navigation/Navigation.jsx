import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/mammals" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Mammals
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/birds" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Birds
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/reptiles" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Reptiles
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
