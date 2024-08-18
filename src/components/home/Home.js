import React from 'react';
import Presentation from '../presentation/Presentation';
import Realisations from '../realisations/Realisations';
import Competences from '../competences/Competences';

const Home = () => {
  return (
    <main>
      <div id="presentation-projet">
        <Presentation />
      </div>
      <div id="realisations-projet">
        <Realisations />
      </div>
      <div id="competences-projet">
        <Competences />
      </div>
    </main>
  );
};

export default Home;
