import React, { useState, useEffect } from 'react';
import './Presentation.css';

const Presentation = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1,
      );
    }, 1750);
    return () => clearInterval(interval);
  }, [data]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
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
