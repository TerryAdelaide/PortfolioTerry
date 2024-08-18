import React, { useState } from 'react';
import './Realisations.css';
import { dataRealisation } from './dataRealisation';

const Realisations = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [clickedImage, setClickedImage] = useState(null);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setClickedImage(null); // Réinitialiser l'image cliquée lors du changement de catégorie
  };

  const isCategoryVisible = (category) => {
    return activeCategory === 'all' || activeCategory === category;
  };

  return (
    <div id="realisations">
      <h1 className="rea-title">Mes Réalisations</h1>
      <div className="buttons">
        <button onClick={() => handleCategoryChange('all')}>TOUS</button>
        <button onClick={() => handleCategoryChange('html')}>HTML / CSS</button>
        <button onClick={() => handleCategoryChange('js')}>JavaScript</button>
        <button onClick={() => handleCategoryChange('seo')}>
          Référencement & SEO
        </button>
        <button onClick={() => handleCategoryChange('react')}>React</button>
        <button onClick={() => handleCategoryChange('backend')}>
          Back-end
        </button>
      </div>
      <div className="rea-container">
        {dataRealisation
          .filter((rea) => isCategoryVisible(rea.category)) // Filtre les réalisations en fonction de la catégorie active
          .map((rea) => (
            <a
              key={rea.id}
              href={rea.link}
              target="_blank"
              rel="noreferrer"
              className={`rea visible`}
            >
              <img src={rea.image} />
            </a>
          ))}
      </div>
    </div>
  );
};

export default Realisations;
