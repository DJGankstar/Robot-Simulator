import React from 'react';
import '../styles/Grid.css'; // Import the stylesheet for the Grid component

function Grid({ position }) {
  // Create an array of 25 elements to represent the 5x5 grid
  const cells = Array(25).fill(null).map((_, index) => {
    // Calculate the x and y coordinates for the current cell
    const x = index % 5;
    const y = Math.floor(index / 5);

    // Determine if the current cell is where the robot is located
    const isRobot = x === position.x && y === position.y;

    // Return a div for each cell, applying the 'robot' class if the robot is in this cell
    // Display the first letter of the direction if the robot is in this cell
    return (
      <div key={index} className={`cell ${isRobot ? 'robot' : ''}`}>
        {isRobot ? position.direction[0] : ''}
      </div>
    );
  });

  // Render the grid with all the cells
  return <div className="grid-container">{cells}</div>;
}

export default Grid;
