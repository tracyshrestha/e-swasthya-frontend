import React, { useState } from 'react';

const ArrayInput = () => {
  const [values, setValues] = useState([]);
  const [currentValue, setCurrentValue] = useState('');

  const handleInputChange = (e) => {
    setCurrentValue(e.target.value);
  };

  const handleAddValue = () => {
    if (currentValue !== '') {
      setValues([...values, currentValue]);
      setCurrentValue('');
    }
  };

  const handleRemoveValue = (index) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={currentValue}
          onChange={handleInputChange}
          placeholder="Enter a value"
        />
        <button onClick={handleAddValue}>Add</button>
      </div>

      <ul>
        {values.map((value, index) => (
          <li key={index}>
            {value}
            <button onClick={() => handleRemoveValue(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayInput;
