import React from 'react';
import '../navigation/Navigation.css';
import Header from '../header/Header';
import Home from '../home/Home';
import Footer from '../footer/Footer';

const Navigation = () => {
  return (
    <div className="bodyBackgroundImage">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default Navigation;
