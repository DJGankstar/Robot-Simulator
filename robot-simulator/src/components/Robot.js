import React from 'react';
import '../styles/Robot.css';

function Robot({ moveRobot, rotateRobot }) {
  return (
    <div className="control-panel">
      <button className="control-button" onClick={() => rotateRobot('NORTH')}>Face North</button>
      <button className="control-button" onClick={() => rotateRobot('SOUTH')}>Face South</button>
      <button className="control-button" onClick={() => rotateRobot('EAST')}>Face East</button>
      <button className="control-button" onClick={() => rotateRobot('WEST')}>Face West</button>
      <button className="control-button" onClick={moveRobot}>Move Forward</button>
    </div>
  );
}

export default Robot;
