import React, { useState } from 'react';

const APL: React.FC = () => {
  const [input1Text, setInput1Text] = useState('Hello');
  const [input2Text, setInput2Text] = useState('Hello');

  const handleButtonClick = (inputNumber: number, action: string) => {
    if (action === 'Da') {} 
    else if (action === 'No') {}
  };

  return (
    <div>
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <input type="text" value={input1Text} readOnly />
        <div>
          <button onClick={() => handleButtonClick(1, 'Da')}>Da</button>
          <button onClick={() => handleButtonClick(1, 'No')}>No</button>
        </div>
      </div>

      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <input type="text" value={input2Text} readOnly />
        <div>
          <button onClick={() => handleButtonClick(2, 'Da')}>Da</button>
          <button onClick={() => handleButtonClick(2, 'No')}>No</button>
        </div>
      </div>
    </div>
  );
};

export default APL;
