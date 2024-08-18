import React from 'react';
import Presentation from '../presentation/Presentation';
import Realisations from '../realisations/Realisations';
import Competences from '../competences/Competences';

const Home = () => {
  return (
    <main>
      <section id="presentation">
        <Presentation />
      </section>
      <section id="realisations">
        <Realisations />
      </section>
      <section id="competences">
        <Competences />
      </section>
    </main>
  );
};

export default Home;
