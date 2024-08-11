import React from 'react';
import '../styles/Robot.css'; // Import the stylesheet for the Robot control component

function Robot({ moveRobot, rotateRobot }) {
  return (
    <div className="control-panel">
      {/* Button to rotate the robot to face North */}
      <button className="control-button" onClick={() => rotateRobot('NORTH')}>
        Face North
      </button>

      {/* Button to rotate the robot to face South */}
      <button className="control-button" onClick={() => rotateRobot('SOUTH')}>
        Face South
      </button>

      {/* Button to rotate the robot to face East */}
      <button className="control-button" onClick={() => rotateRobot('EAST')}>
        Face East
      </button>

      {/* Button to rotate the robot to face West */}
      <button className="control-button" onClick={() => rotateRobot('WEST')}>
        Face West
      </button>

      {/* Button to move the robot forward in the direction it is currently facing */}
      <button className="control-button" onClick={moveRobot}>
        Move Forward
      </button>
    </div>
  );
}

export default Robot;
