import React from 'react';
import Numbers from './Numbers';
import Operations from './Operations';
import Result from './Result';
import {addition, subtract, multiply, divide} from '../calculations';


function Calculator(){

  const [selectedNumber, setValue] = React.useState('');
  const [operations, setOperations] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const onClick = (event) => {
    event.preventDefault();

    const selectedOperations = event.target.innerHTML;

    if(selectedOperations === "+"){
      addition(selectedNumber);
    } else if(selectedOperations === "-"){
      subtract(selectedNumber);
    } else if(selectedOperations === "X"){
      multiply(selectedNumber);
    } else if(selectedOperations === "/"){
      divide(selectedNumber);
    } else {
      setValue(selectedNumber.concat(event.target.innerHTML));
    }

  }


  return (
    <>
      <Result selected={selectedNumber} />
      <Operations operationClick={onClick} />
      <Numbers numberClick={onClick} />
    </>
  )

}

export default Calculator;