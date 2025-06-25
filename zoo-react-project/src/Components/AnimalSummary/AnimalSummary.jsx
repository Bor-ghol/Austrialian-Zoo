import React, { useState } from 'react';
import AnimalModal from '../AnimalModal/AnimalModal';
import styles from './AnimalSummary.module.css';

const AnimalSummary = ({ animal }) => {
  const [showModal, setShowModal] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!animal) return null;

  const getAnimalEmoji = (name) => {
    const lowerName = name?.toLowerCase() || '';
    if (lowerName.includes('kangaroo')) return '🦘';
    if (lowerName.includes('koala')) return '🐨';
    if (lowerName.includes('wombat')) return '🐻';
    if (lowerName.includes('platypus')) return '🦫';
    if (lowerName.includes('echidna')) return '🦔';
    if (lowerName.includes('tasmanian')) return '😈';
    if (lowerName.includes('cassowary')) return '🦅';
    if (lowerName.includes('kookaburra')) return '🐦';
    if (lowerName.includes('cockatoo')) return '🦜';
    if (lowerName.includes('lorikeet')) return '🦜';
    if (lowerName.includes('crocodile')) return '🐊';
    if (lowerName.includes('python')) return '🐍';
    if (lowerName.includes('gecko')) return '🦎';
    if (lowerName.includes('dragon')) return '🦎';
    return '🦘';
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'least concern': return '#28a745';
      case 'vulnerable': return '#ffc107';
      case 'endangered': return '#fd7e14';
      case 'critically endangered': return '#dc3545';
      default: return '#6c757d';
    }
  };

  return (
    <>
      <div className={styles.summary}>
        <div className={styles.imageContainer}>
          {imageError ? (
            <div className={styles.imageFallback}>
              <span className={styles.emoji}>{getAnimalEmoji(animal.name)}</span>
              <p>{animal.name}</p>
            </div>
          ) : (
            <img
              src={animal.image}
              alt={animal.name}
              className={styles.image}
              onError={() => setImageError(true)}
            />
          )}
          <div className={styles.statusBadge} style={{ backgroundColor: getStatusColor(animal.status) }}>
            {animal.status}
          </div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.name}>{animal.name}</h2>
            <div className={styles.quickStats}>
              <span className={styles.stat}>
                <span className={styles.statIcon}>📏</span>
                {animal.size}
              </span>
              <span className={styles.stat}>
                <span className={styles.statIcon}>⚖️</span>
                {animal.weight}
              </span>
              <span className={styles.stat}>
                <span className={styles.statIcon}>⏳</span>
                {animal.lifespan}
              </span>
            </div>
          </div>
          
          <p className={styles.description}>{animal.description}</p>
          
          <div className={styles.footer}>
            <button 
              className={styles.readMoreButton}
              onClick={() => setShowModal(true)}
            >
              <span>Learn More</span>
              <span className={styles.buttonIcon}>→</span>
            </button>
          </div>
        </div>
      </div>
      
      {showModal && (
        <AnimalModal 
          animal={animal} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
};

export default AnimalSummary;
