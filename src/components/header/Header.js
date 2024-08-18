import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li className="align-left">
            <Link
              to="presentation-projet"
              smooth={true}
              duration={500}
              offset={-window.innerHeight * 0.075} // Défilement ajusté par rapport à la hauteur du header
            >
              Terry Adélaïde
            </Link>
          </li>
          <li>
            <Link
              to="presentation-projet"
              smooth={true}
              duration={500}
              offset={-window.innerHeight * 0.075} // Défilement ajusté par rapport à la hauteur du header
            >
              Présentation
            </Link>
          </li>
          <li>
            <Link
              to="realisations-projet"
              smooth={true}
              duration={500}
              offset={-window.innerHeight * 0.075} // Défilement ajusté par rapport à la hauteur du header
            >
              Mes réalisations
            </Link>
          </li>
          <li>
            <Link
              to="competences-projet"
              smooth={true}
              duration={500}
              offset={-window.innerHeight * 0.075} // Défilement ajusté par rapport à la hauteur du header
            >
              Mes compétences
            </Link>
          </li>
          <li>
            <a
              href="/cv/CV Terry ADELAIDE.pdf"
              download="CV de Terry Adélaïde.pdf"
            >
              Mon CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
