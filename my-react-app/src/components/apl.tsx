import React, { useState } from 'react';
import Leaderboard from './leaderboard';
import "../App.css";


const APL: React.FC = () => {

  const handleButtonClick = (inputNumber: number, action: string) => {
    // Handle button click logic here if needed
  };

  return (
    <div>
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        
        <div>
          <button onClick={() => handleButtonClick(1, 'Da')}>Da</button>
          <button onClick={() => handleButtonClick(1, 'No')}>Nu</button>
        </div>


      </div>
    </div>
  );
};

export default APL;
