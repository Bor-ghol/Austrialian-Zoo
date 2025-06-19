import React from 'react';
import styles from '../MainContent/MainContent.module.css';

const MainContent = ({ children }) => {
  return (
    <div className={styles.mainContent}>
      {children}
    </div>
  );
};

export default MainContent;
