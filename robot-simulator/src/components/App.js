import React, { useState } from 'react';
import '../styles/App.css';
import Grid from './Grid';
import Robot from './Robot';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0, direction: 'NORTH' });

  const moveRobot = () => {
    let { x, y, direction } = position;
    if (direction === 'NORTH' && y > 0) y -= 1;
    if (direction === 'SOUTH' && y < 4) y += 1;
    if (direction === 'EAST' && x < 4) x += 1;
    if (direction === 'WEST' && x > 0) x -= 1;
    setPosition({ x, y, direction });
  };

  const rotateRobot = (newDirection) => {
    setPosition({ ...position, direction: newDirection });
  };

  return (
    <div className="app-container">
      <h1 className="title">Robot Simulator</h1>
      <div className="content-container">
        <Grid position={position} />
        <Robot moveRobot={moveRobot} rotateRobot={rotateRobot} />
      </div>
    </div>
  );
}

export default App;
