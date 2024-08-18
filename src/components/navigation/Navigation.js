import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../navigation/Navigation.css';
import Header from '../header/Header';
import Home from '../home/Home';
import Footer from '../footer/Footer';
import Presentation from '../presentation/Presentation';

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="bodyBackgroundImage">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/presentation" element={<Presentation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
