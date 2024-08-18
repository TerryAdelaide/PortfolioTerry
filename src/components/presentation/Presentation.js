import React, { useState, useEffect } from 'react';
import { data } from './data';
import './Presentation.css';

const Presentation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1,
      );
    }, 1750);
    return () => clearInterval(interval);
  });

  return data.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div id="presentation">
      <div className="Titre1">
        <h1>Présentation</h1>
      </div>
      <div className="card">
        <img
          src={data[currentIndex].cover}
          alt={`Cover of ${data[currentIndex].id}`}
          className="card-img"
        />
      </div>
      <div className="paragraph1">
        <p>
          Après plusieurs années à occuper divers métiers, j'ai décidé de me
          former au métier de développeur fullstack. Je conçois et réalise des
          sites web du cahier des charges à la mise en ligne. J'ambitionne
          d'approfondir ma formation avec React afin de me perfectionner avec ce
          langage. Je vous invite à découvrir les projets que j'ai réalisé.
          Cliquez ici si vous souhaitez avoir mon CV au format PDF.
        </p>
      </div>
    </div>
  );
};

export default Presentation;
