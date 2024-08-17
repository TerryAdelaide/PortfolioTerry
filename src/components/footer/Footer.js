import React from 'react';
import '../footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div>© 2024 Terry ADÉLAÏDE, Tous droits réservés.</div>
      <div className="logos">
        <a href="mailto:terry.adelaide@live.fr">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://github.com/TerryAdelaide"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://linkedin.com/in/terry-adelaide"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
