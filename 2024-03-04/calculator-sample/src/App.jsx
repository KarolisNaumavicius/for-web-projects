import { useState } from 'react';
import './App.css';

const App = () => {
  const [first, setFirst] = useState(''); 
  const [second, setSecond] = useState(''); 
  const [action, setAction] = useState('');
  const [result, setResult] = useState('');

  const handleDigit = (e) => {
    const digit = e.target.textContent;
    if (action === '') {
      setFirst(first + digit);
    } else {
      setSecond(second + digit);
    }
  };

  const handleAction = (e) => {
    setAction(e.target.textContent);
  };

  const handleResult = () => {
    if (first === '' || second === '' || action === '') {
      setResult('Missing operand(s) or operator');
      return; 
    }

    const num1 = parseFloat(first);
    const num2 = parseFloat(second);

    let calculationResult;
    switch (action) {
      case '+':
        calculationResult = num1 + num2;
        break;
      case '-':
        calculationResult = num1 - num2;
        break;
      case '*':
        calculationResult = num1 * num2;
        break;
      case   
 '/':
        if (num2 === 0) {
          calculationResult = 'Division by zero';
        } else {
          calculationResult = num1 / num2;
        }
        break;
      default:
        calculationResult = 'Invalid operator';
    }

    setResult(calculationResult.toString()); // Convert result to string
  };
  
  return (
    <>
      <h1>Calculator</h1>
      <div className="result">{first} {action} {second} = {result}</div>
      <div className="digits">
        <button onClick={handleDigit}>0</button>
        <button onClick={handleDigit}>1</button>
        <button onClick={handleDigit}>2</button>
        <button onClick={handleDigit}>3</button>
        <button onClick={handleDigit}>4</button>
        <button onClick={handleDigit}>5</button>
        <button onClick={handleDigit}>6</button>
        <button onClick={handleDigit}>7</button>
        <button onClick={handleDigit}>8</button>
        <button onClick={handleDigit}>9</button>
      </div>
      <div className="actions">
        <button onClick={handleAction}>+</button>
        <button onClick={handleAction}>-</button>
        <button onClick={handleAction}>*</button>
        <button onClick={handleAction}>/</button>
      </div>
      <div className="calculate">
        <button onClick={handleResult}>=</button>
      </div>
    </>
  )
}

export default App