import React from 'react';
import '../styles/Grid.css';

function Grid({ position }) {
  const cells = Array(25).fill(null).map((_, index) => {
    const x = index % 5;
    const y = Math.floor(index / 5);
    const isRobot = x === position.x && y === position.y;
    return <div key={index} className={`cell ${isRobot ? 'robot' : ''}`}>{isRobot ? position.direction[0] : ''}</div>;
  });

  return <div className="grid-container">{cells}</div>;
}

export default Grid;
