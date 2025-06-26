import React from 'react';
import styles from '../AnimalModal/AnimalModal.module.css'

const AnimalModal = ({ animal, onClose }) => {
  if (!animal) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img 
              src={animal.image} 
              alt={animal.name}
              className={styles.image}
            />
          </div>
          <div className={styles.details}>
            <h2 className={styles.name}>{animal.name}</h2>
            <p className={styles.description}>{animal.description}</p>
            <div className={styles.specs}>
              <div className={styles.spec}>
                <strong>Diet:</strong> {animal.food}
              </div>
              <div className={styles.spec}>
                <strong>Group:</strong> {animal.group.charAt(0).toUpperCase() + animal.group.slice(1)}
              </div>
              <div className={styles.spec}>
                <strong>Lifespan:</strong> {animal.lifespan}
              </div>
              <div className={styles.spec}>
                <strong>Length:</strong> {animal.length}
              </div>
              <div className={styles.spec}>
                <strong>Weight:</strong> {animal.weight}
              </div>
              <div className={styles.spec}>
                <strong>Found:</strong> {animal.found}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalModal;
