import React, { useState } from 'react';
import { animals } from '../../Data/animals';
import Sidebar from '../../Components/Sidebar/Sidebar';
import MainContent from '../../Components/MainContent/MainContent';
import AnimalSummary from '../../Components/AnimalSummary/AnimalSummary';
import styles from './Reptiles.module.css';

const Reptiles = () => {
  const [activeAnimalId, setActiveAnimalId] = useState(null);
  
  const reptiles = animals.filter(animal => animal.group === 'reptiles');

  const handleAnimalClick = (animalId) => {
    if (activeAnimalId === animalId) {
      setActiveAnimalId(null);
    } else {
      setActiveAnimalId(animalId);
    }
  };

  const activeAnimal = reptiles.find(animal => animal.id === activeAnimalId);

  return (
    <div className={styles.reptilesPage}>
      <Sidebar 
        animals={reptiles}
        onAnimalClick={handleAnimalClick}
        activeAnimalId={activeAnimalId}
        title="Reptiles"
      />
      <MainContent>
        {activeAnimal ? (
          <AnimalSummary animal={activeAnimal} />
        ) : (
          <div className={styles.groupInfo}>
            <h1>Australian Reptiles</h1>
            <div className={styles.infoContent}>
              <p>
                Australia's reptiles are among the most diverse and fascinating in the world. 
                From the massive perentie lizard to the ancient hawksbill turtle, these 
                cold-blooded creatures have adapted to thrive in Australia's varied climates.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <h3>🦎 Diverse Lizards</h3>
                  <p>From tiny geckos to massive monitor lizards, Australia has incredible lizard diversity.</p>
                </div>
                <div className={styles.feature}>
                  <h3>🐢 Ancient Turtles</h3>
                  <p>Sea turtles have been swimming in Australian waters for millions of years.</p>
                </div>
                <div className={styles.feature}>
                  <h3>🌡️ Temperature Control</h3>
                  <p>Australian reptiles have amazing adaptations for regulating their body temperature.</p>
                </div>
              </div>
              <p className={styles.instruction}>
                Click on any reptile name in the sidebar to explore these incredible cold-blooded creatures!
              </p>
            </div>
          </div>
        )}
      </MainContent>
    </div>
  );
};

export default Reptiles;
