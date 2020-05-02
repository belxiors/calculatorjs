import React, { useState } from 'react';
import Display from './Display/Display';
import Button from './Button/Button';
import './App.scss';

const App = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [lastValue, setLastValue] = useState();

  function concatToDisplay(newValue) {
    setDisplayValue(displayValue.concat(newValue));
  }

  function handleOperation(op) {
    var first = parseInt(displayValue, 10);
    var second = parseInt(lastValue, 10);
    if (first && second) {
      switch (op) {
        case '+':
          first += second;
          break;
        case '-':
          first -= second;
          break;
        case '*':
          first *= second;
          break;
        case '/':
          first /= second;
          break;
        case 'clear':
          setDisplayValue('');
          break;
        default:
          break;
      }
      setDisplayValue(`${first}`);
    }
    setDisplayValue('');
    setLastValue(`${first || second}`);
  }

  return (
    <div className="calculator-container">
      <div className="calculator">
        <Display value={displayValue || lastValue} />
        <Button
          className="r3 c1-2"
          value="7"
          type="number"
          onClick={concatToDisplay}
        />
        <Button
          className="r3 c2-3"
          value="8"
          type="number"
          onClick={concatToDisplay}
        />
        <Button
          className="r3 c3-4"
          value="9"
          type="number"
          onClick={concatToDisplay}
        />
        <Button
          className="r4 c1-2"
          value="4"
          type="number"
          onClick={concatToDisplay}
        />
        <Button
          className="r4 c2-3"
          value="5"
          type="number"
          onClick={concatToDisplay}
        />
        <Button
          className="r4 c3-4"
          value="6"
          type="number"
          onClick={concatToDisplay}
        />
        <Button
          className="r5 c1-2"
          value="1"
          type="number"
          onClick={concatToDisplay}
        />
        <Button
          className="r5 c2-3"
          value="2"
          type="number"
          onClick={concatToDisplay}
        />
        <Button
          className="r5 c3-4"
          value="3"
          type="number"
          onClick={concatToDisplay}
        />
        <Button
          className="r6 c1-3"
          value="0"
          type="number"
          onClick={concatToDisplay}
        />
        <Button
          className="r6 c3-4"
          value=","
          type="number"
          onClick={concatToDisplay}
        />

        <Button
          className="r2 c1-4"
          value="clear"
          type="action"
          onClick={handleOperation}
        />
        <Button
          className="r2 c4-5"
          value="/"
          type="action"
          onClick={handleOperation}
        />
        <Button
          className="r3 c4-5"
          value="*"
          type="action"
          onClick={handleOperation}
        />
        <Button
          className="r4 c4-5"
          value="-"
          type="action"
          onClick={handleOperation}
        />
        <Button
          className="r5 c4-5"
          value="+"
          type="action"
          onClick={handleOperation}
        />
        <Button
          className="r6 c4-5"
          value="="
          type="action"
          onClick={handleOperation}
        />
      </div>
    </div>
  );
};

export default App;
