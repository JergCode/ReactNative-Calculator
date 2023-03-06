import {useState, useRef} from 'react';

enum Operations {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
}

export const useCalculation = () => {
  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState('');

  const operationRef = useRef<Operations>();

  const onClear = () => {
    if (firstNumber === '0') {
      setSecondNumber('0');
    }
    setFirstNumber('0');
  };

  const onNumberPressed = (textNumber: string) => {
    if (firstNumber === '0') {
      if (textNumber === '+/-' || textNumber === '0') {
        return;
      }

      if (textNumber !== '0' && textNumber !== '.') {
        setFirstNumber(textNumber);
        return;
      }

      setFirstNumber(firstNumber + textNumber);
      return;
    }

    if (textNumber === '+/-') {
      if (firstNumber === '0.') {
        return;
      }

      const tempNumber: string = firstNumber.startsWith('-')
        ? firstNumber.replace('-', '')
        : `-${firstNumber}`;
      setFirstNumber(tempNumber);
      return;
    }
    if (textNumber === '.' && firstNumber.includes('.')) {
      return;
    }

    setFirstNumber(firstNumber + textNumber);
  };

  const onDeleteNumber = () => {
    if (
      firstNumber.length === 1 ||
      (firstNumber.length === 2 && firstNumber.startsWith('-'))
    ) {
      onClear();
      return;
    }

    const tempNumb = firstNumber.substring(0, firstNumber.length - 1);

    if (tempNumb.endsWith('0.')) {
      onClear();
      return;
    }

    setFirstNumber(tempNumb);
  };

  const swapNumbers = () => {
    setSecondNumber(firstNumber);
    setFirstNumber('0');
  };

  const onOperation = (operation: String) => {
    const tempNumber = firstNumber.endsWith('.')
      ? firstNumber.slice(0, -1)
      : firstNumber;

    if (tempNumber === '0') {
      return;
    }

    switch (operation) {
      case '+': {
        operationRef.current = Operations.ADD;
        break;
      }
      case '-': {
        operationRef.current = Operations.SUBTRACT;
        break;
      }
      case 'x': {
        operationRef.current = Operations.MULTIPLY;
        break;
      }
      case '/': {
        operationRef.current = Operations.DIVIDE;
        break;
      }
      default: {
        return;
      }
    }

    console.log(tempNumber);
    console.log(operationRef);

    swapNumbers();
  };

  const onCalculate = () => {
    let result: string;
    switch (operationRef.current) {
      case Operations.ADD: {
        result = (
          Number.parseFloat(secondNumber) + Number.parseFloat(firstNumber)
        ).toString();
        break;
      }
      case Operations.SUBTRACT: {
        result = (
          Number.parseFloat(secondNumber) - Number.parseFloat(secondNumber)
        ).toString();
        break;
      }
      case Operations.MULTIPLY: {
        result = (
          Number.parseFloat(firstNumber) * Number.parseFloat(secondNumber)
        ).toString();
        break;
      }
      case Operations.DIVIDE: {
        result = (
          Number.parseFloat(firstNumber) / Number.parseFloat(secondNumber)
        ).toString();
        break;
      }

      default: {
        return;
      }
    }

    setFirstNumber(result);
  };

  return {
    firstNumber,
    secondNumber,
    onCalculate,
    onDeleteNumber,
    onOperation,
    onNumberPressed,
    onClear,
  };
};
