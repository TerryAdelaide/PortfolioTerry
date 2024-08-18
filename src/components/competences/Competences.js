import React from 'react';
import './competences.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faJs,
  faReact,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

const skills = [
  { name: 'HTML/CSS', level: 93, icon: faHtml5 },
  { name: 'JavaScript', level: 79, icon: faJs },
  { name: 'React', level: 88, icon: faReact },
  { name: 'Node.js', level: 85, icon: faNodeJs },
];

const Competences = () => {
  return (
    <div id="competences">
      <h2>Mes Compétences</h2>
      <div className="Paragraf">
        <p className="paragraph2">
          À l'issue de ma formation de développeur web fullstack chez
          Openclassrooms, j'ai acquis diverses compétences que je souhaiterais
          développer et mettre à votre profit. Veuillez les trouver ci-dessus en
          détails !
        </p>
      </div>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="progress1"
          role="progressbar"
          aria-label={`Example with label for ${skill.name}`}
          aria-valuenow={skill.level}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className={`progress-bar progress-bar-${skill.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')}`}
            style={{ width: `${skill.level}%` }}
          >
            <div className="name">
              <FontAwesomeIcon icon={skill.icon} />
              &nbsp;{skill.name}
            </div>
            <div className="level">{skill.level}%</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Competences;
