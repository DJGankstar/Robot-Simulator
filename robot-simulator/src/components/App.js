import React, { useState } from 'react';
import '../styles/App.css';  // Import the main stylesheet for the app
import Grid from './Grid';   // Import the Grid component
import Robot from './Robot'; // Import the Robot control component
import { ReactComponent as Logo } from '../logo.svg'; // Import the SVG as a React component

function App() {
  // Initialize state to track the robot's position and direction
  const [position, setPosition] = useState({ x: 0, y: 0, direction: 'NORTH' });

  // Function to move the robot in the direction it is currently facing
  const moveRobot = () => {
    let { x, y, direction } = position;

    // Update the robot's position based on its direction
    if (direction === 'NORTH' && y > 0) y -= 1;
    if (direction === 'SOUTH' && y < 4) y += 1;
    if (direction === 'EAST' && x < 4) x += 1;
    if (direction === 'WEST' && x > 0) x -= 1;

    // Update the position state with the new coordinates
    setPosition({ x, y, direction });
  };

  // Function to rotate the robot to face a new direction
  const rotateRobot = (newDirection) => {
    // Update the position state with the new direction
    setPosition({ ...position, direction: newDirection });
  };

  return (
    <div className="app-container">
      {/* Application Title with Logo */}
      <h1 className="title">
        <Logo className="logo" /> {/* SVG Logo */}
        Simulator
      </h1>

      {/* Container for the Grid and Robot controls */}
      <div className="content-container">
        {/* Grid component to display the robot on a 5x5 grid */}
        <Grid position={position} />

        {/* Robot component with controls to move and rotate the robot */}
        <Robot moveRobot={moveRobot} rotateRobot={rotateRobot} />
      </div>
    </div>
  );
}

export default App;
