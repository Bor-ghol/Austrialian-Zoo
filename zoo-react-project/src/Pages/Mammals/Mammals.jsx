import React, { useState } from 'react';
import { animals } from '../../Data/animals';
import Sidebar from '../../Components/Sidebar/Sidebar';
import MainContent from '../../Components/MainContent/MainContent';
import AnimalSummary from '../../Components/AnimalSummary/AnimalSummary';
import styles from '../Mammals/Mammals.module.css';

const Mammals = () => {
  const [activeAnimalId, setActiveAnimalId] = useState(null);
  
  const mammals = animals.filter(animal => animal.group === 'mammals');

  const handleAnimalClick = (animalId) => {
    if (activeAnimalId === animalId) {
      setActiveAnimalId(null);
    } else {
      setActiveAnimalId(animalId);
    }
  };

  const activeAnimal = mammals.find(animal => animal.id === activeAnimalId);

  return (
    <div className={styles.mammalsPage}>
      <Sidebar 
        animals={mammals}
        onAnimalClick={handleAnimalClick}
        activeAnimalId={activeAnimalId}
        title="Mammals"
      />
      <MainContent>
        {activeAnimal ? (
          <AnimalSummary animal={activeAnimal} />
        ) : (
          <div className={styles.groupInfo}>
            <h1>Australian Mammals</h1>
            <div className={styles.infoContent}>
              <p>
                Australia is home to some of the world's most unique mammals. Many of these 
                are marsupials - animals that carry their young in pouches. Australia also 
                has monotremes, the only egg-laying mammals in the world!
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <h3>🦘 Marsupials</h3>
                  <p>Most Australian mammals are marsupials, including kangaroos, koalas, and Tasmanian devils.</p>
                </div>
                <div className={styles.feature}>
                  <h3>🥚 Monotremes</h3>
                  <p>Unique egg-laying mammals like the echidna and platypus are found only in Australia.</p>
                </div>
                <div className={styles.feature}>
                  <h3>🌿 Adaptations</h3>
                  <p>Australian mammals have evolved unique adaptations to survive in diverse environments.</p>
                </div>
              </div>
              <p className={styles.instruction}>
                Click on any mammal name in the sidebar to learn more about these fascinating creatures!
              </p>
            </div>
          </div>
        )}
      </MainContent>
    </div>
  );
};

export default Mammals;
