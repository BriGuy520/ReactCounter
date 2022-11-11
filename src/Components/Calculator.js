import React from 'react';
import Numbers from './Numbers';
import Operations from './Operations';
import Result from './Result';


function Calculator(){

  return (
    <>
      <Result />
      <Operations />
      <Numbers />
    </>
  )

}

export default Calculator;