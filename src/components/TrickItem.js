import React from 'react';
import './TrickItem.css';

function TrickItem({ trick }) {
  return (
    <li>
      <h3>{trick.name}</h3>
      <p>Stance: {trick.stance}</p>
      <p>Obstacle: {trick.obstacle}</p>
      <p>
        Tutorial: <a href={trick.tutorial} target="_blank" rel="noopener noreferrer">Watch Tutorial</a>
      </p>
    </li>
  );
}

export default TrickItem;
