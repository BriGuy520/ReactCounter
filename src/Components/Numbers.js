import React from 'react';


function Numbers({numberClick = f => f}){

  return (
    <div>
      <div>
      <button onClick={numberClick}>7</button>
      <button onClick={numberClick}>8</button>
      <button onClick={numberClick}>9</button>
     </div>
     <div>
      <button onClick={numberClick}>4</button>
      <button onClick={numberClick}>5</button>
      <button onClick={numberClick}>6</button>
     </div>
     <div>
      <button onClick={numberClick}>1</button>
      <button onClick={numberClick}>2</button>
      <button onClick={numberClick}>3</button>
     </div>
     <div>
      <button onClick={numberClick}>0</button>
      <button onClick={numberClick}>.</button>
      <button onClick={numberClick}>=</button>
     </div>
     
    </div>
  );

}



export default Numbers;