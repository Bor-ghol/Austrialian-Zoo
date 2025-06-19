import React, { useState } from 'react';
import { animals } from '../../Data/animals';
import Sidebar from '../../Components/Sidebar/Sidebar';
import MainContent from '../../Components/MainContent/MainContent';
import AnimalSummary from '../../Components/AnimalSummary/AnimalSummary';
import styles from './Birds.module.css';

const Birds = () => {
  const [activeAnimalId, setActiveAnimalId] = useState(null);
  
  const birds = animals.filter(animal => animal.group === 'birds');

  const handleAnimalClick = (animalId) => {
    if (activeAnimalId === animalId) {
      setActiveAnimalId(null);
    } else {
      setActiveAnimalId(animalId);
    }
  };

  const activeAnimal = birds.find(animal => animal.id === activeAnimalId);

  return (
    <div className={styles.birdsPage}>
      <Sidebar 
        animals={birds}
        onAnimalClick={handleAnimalClick}
        activeAnimalId={activeAnimalId}
        title="Birds"
      />
      <MainContent>
        {activeAnimal ? (
          <AnimalSummary animal={activeAnimal} />
        ) : (
          <div className={styles.groupInfo}>
            <h1>Australian Birds</h1>
            <div className={styles.infoContent}>
              <p>
                Australia is home to an incredible diversity of bird species, from the iconic 
                laughing kookaburra to the impressive cassowary. Many Australian birds are 
                found nowhere else in the world and have evolved unique characteristics.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <h3>🦜 Unique Species</h3>
                  <p>Australia has many endemic bird species, including colorful parrots and cockatoos.</p>
                </div>
                <div className={styles.feature}>
                  <h3>🎵 Distinctive Calls</h3>
                  <p>From the kookaburra's laugh to the cockatoo's screech, Australian birds have memorable voices.</p>
                </div>
                <div className={styles.feature}>
                  <h3>🌈 Vibrant Colors</h3>
                  <p>Many Australian birds display brilliant plumage and striking color patterns.</p>
                </div>
              </div>
              <p className={styles.instruction}>
                Click on any bird name in the sidebar to discover more about these amazing feathered friends!
              </p>
            </div>
          </div>
        )}
      </MainContent>
    </div>
  );
};

export default Birds;
