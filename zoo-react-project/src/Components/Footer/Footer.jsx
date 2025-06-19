import React from 'react';
import styles from '../Footer/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Australia Zoo</h3>
            <p>Discover the amazing wildlife of Australia</p>
          </div>
          <div className={styles.section}>
            <h4>Visit Us</h4>
            <p>Open daily 11:00 AM - 00:00 PM</p>
            <p>Phone: (07) 5436 2000</p>
          </div>
          <div className={styles.section}>
            <h4>Conservation</h4>
            <p>Supporting Australian wildlife conservation efforts</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2024 Yasmine Borghol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
