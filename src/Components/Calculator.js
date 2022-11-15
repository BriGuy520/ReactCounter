import React from 'react';
import Numbers from './Numbers';
import Operations from './Operations';
import Result from './Result';
import {addition, subtract, multiply, divide} from '../calculations';


function Calculator(){

  const [selectedNumber, setValue] = React.useState('');
  const [total, setTotal] = React.useState(0);

  const onClick = (event) => {
    event.preventDefault();

    const selectedOperations = event.target.innerHTML;

    if(selectedOperations === "+"){
      setTotal(addition(selectedNumber, total));
      setValue('');
    } else if(selectedOperations === "-"){
      setTotal(subtract(selectedNumber));
      setValue('');
    } else if(selectedOperations === "X"){
      setTotal(multiply(selectedNumber));
      setValue('');
    } else if(selectedOperations === "/"){
      setTotal(divide(selectedNumber));
      setValue('');
    } else if(selectedOperations === "="){
      setValue(total + Number(selectedNumber)); 
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