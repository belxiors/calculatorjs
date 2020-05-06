import React, { useState } from 'react';
import Display from './Display/Display';
import Button from './Button/Button';
import './App.scss';
import operations from './utils/MathCalculator';
import config from './calculator.config.json';

const App = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [memory, setMemory] = useState('');
  const [operator, setOperator] = useState();
  const [{ actions, inputs }] = config;

  const concatToDisplay = newValue => {
    setDisplayValue(displayValue.concat(newValue));
  };

  const handleClear = () => {
    setDisplayValue('');
    setMemory('');
  };

  const handleOperator = op => {
    if (displayValue) {
      if (!memory) {
        setMemory(displayValue);
      } else {
        const result = operations(operator)(
          Number(memory),
          Number(displayValue),
        );
        setMemory(result);
      }
      setDisplayValue('');
    }
    setOperator(op);
  };

  const handleOperation = op => {
    if (op === 'clear') {
      handleClear();
    } else {
      handleOperator(op);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <Display value={displayValue || memory} />
        {inputs.map(({ className, value }) => (
          <Button
            className={className}
            value={value}
            type="number"
            onClick={concatToDisplay}
          />
        ))}
        {actions.map(({ className, value }) => (
          <Button
            className={className}
            value={value}
            type="action"
            onClick={handleOperation}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
