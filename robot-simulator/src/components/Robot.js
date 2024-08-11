import React from 'react';
import '../styles/Robot.css';

function Robot({ moveRobot, rotateRobot }) {
  return (
    <div className="control-panel">
      {/* Button to rotate the robot to face Up */}
      <button className="control-button" onClick={() => rotateRobot('NORTH')}>↑</button>

      {/* Button to rotate the robot to face Down */}
      <button className="control-button" onClick={() => rotateRobot('SOUTH')}>↓</button>

      {/* Button to rotate the robot to face Right */}
      <button className="control-button" onClick={() => rotateRobot('EAST')}>→</button>

      {/* Button to rotate the robot to face Left */}
      <button className="control-button" onClick={() => rotateRobot('WEST')}>←</button>

      {/* Button to move the robot forward */}
      <button className="control-button" onClick={moveRobot}>Move</button>
    </div>
  );
}

export default Robot;
