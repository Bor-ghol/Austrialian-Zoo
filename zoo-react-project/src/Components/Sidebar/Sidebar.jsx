import React from 'react';
import styles from '../Sidebar/Sidebar.module.css';

const Sidebar = ({ animals, onAnimalClick, activeAnimalId, title }) => {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.animalList}>
        {animals.map(animal => (
          <li key={animal.id}>
            <button
              className={`${styles.animalButton} ${
                activeAnimalId === animal.id ? styles.active : ''
              }`}
              onClick={() => onAnimalClick(animal.id)}
            >
              {animal.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
