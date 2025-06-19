import React, { useState } from 'react';
import { animals } from '../../Data/animals';
import Sidebar from '../../Components/Sidebar/Sidebar';
import MainContent from '../../Components/MainContent/MainContent';
import AnimalSummary from '../../Components/AnimalSummary/AnimalSummary';
import AnimalModal from '../../Components/AnimalModal/AnimalModal';
import styles from './Home.module.css';

const Home = () => {
  const [activeAnimalId, setActiveAnimalId] = useState(null);
  const [modalAnimal, setModalAnimal] = useState(null);

  const handleAnimalClick = (animalId) => {
    if (activeAnimalId === animalId) {
      setActiveAnimalId(null);
    } else {
      setActiveAnimalId(animalId);
    }
  };

  const handleReadMore = (animal) => {
    setModalAnimal(animal);
  };

  const handleCloseModal = () => {
    setModalAnimal(null);
  };

  const activeAnimal = animals.find(animal => animal.id === activeAnimalId);

  return (
    <div className={styles.homePage}>
      <Sidebar 
        animals={animals}
        onAnimalClick={handleAnimalClick}
        activeAnimalId={activeAnimalId}
        title="All Animals"
      />
      <MainContent>
        {activeAnimal ? (
          <AnimalSummary 
            animal={activeAnimal}
            showReadMore={true}
            onReadMore={handleReadMore}
          />
        ) : (
          <div className={styles.welcome}>
            <h1>Welcome to Australia Zoo</h1>
            <p className={styles.welcomeText}>
              Discover the incredible wildlife of Australia! Our zoo is home to some of the most 
              unique and fascinating animals on Earth. From the spiny echidna to the colorful 
              cassowary, each animal has its own amazing story.
            </p>
            <p className={styles.welcomeText}>
              Click on any animal name in the sidebar to learn more about these wonderful creatures 
              and their natural habitats. You can explore our collection of mammals, birds, and 
              reptiles that call Australia home.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h3>{animals.length}</h3>
                <p>Amazing Animals</p>
              </div>
              <div className={styles.stat}>
                <h3>{animals.filter(a => a.group === 'mammals').length}</h3>
                <p>Mammals</p>
              </div>
              <div className={styles.stat}>
                <h3>{animals.filter(a => a.group === 'birds').length}</h3>
                <p>Birds</p>
              </div>
              <div className={styles.stat}>
                <h3>{animals.filter(a => a.group === 'reptiles').length}</h3>
                <p>Reptiles</p>
              </div>
            </div>
          </div>
        )}
      </MainContent>
      {modalAnimal && (
        <AnimalModal 
          animal={modalAnimal}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Home;
