import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../AnimalSummary/AnimalSummary.module.css';

const AnimalSummary = ({ animal, showReadMore = false, onReadMore }) => {
  const getShortDescription = (description) => {
    return description.length > 200 ? description.substring(0, 200) + '...' : description;
  };

  const capitalizeGroup = (group) => {
    return group.charAt(0).toUpperCase() + group.slice(1);
  };

  return (
    <div className={styles.summary}>
      <div className={styles.imageContainer}>
        <img 
          src={animal.image} 
          alt={animal.name}
          className={styles.image}
          onError={(e) => {
            e.target.src = '/images/placeholder.jpg';
          }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{animal.name}</h3>
        <p className={styles.description}>
          {showReadMore ? getShortDescription(animal.description) : animal.description}
        </p>
        <div className={styles.details}>
          <p><strong>Diet:</strong> {animal.food}</p>
          <p>
            <strong>Group:</strong> 
            <Link to={`/${animal.group}`} className={styles.groupLink}>
              {capitalizeGroup(animal.group)}
            </Link>
          </p>
          {!showReadMore && (
            <>
              <p><strong>Lifespan:</strong> {animal.lifespan}</p>
              <p><strong>Length:</strong> {animal.length}</p>
              <p><strong>Weight:</strong> {animal.weight}</p>
              <p><strong>Found:</strong> {animal.found}</p>
            </>
          )}
        </div>
        {showReadMore && (
          <button 
            className={styles.readMoreButton}
            onClick={() => onReadMore(animal)}
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default AnimalSummary;
