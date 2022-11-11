import React from 'react';


function Numbers({selectNumber = f => f}){

  const [selected, setNumber] = React.useState('');

  const handleClick = (event) => {
    event.preventDefault();



    setNumber(selected.concat(event.target.innerHTML));
  }



  return (
    <div>
      {typeof selected === 'string' ? selected : ''}
      <div>
      <button onClick={handleClick}>7</button>
      <button onClick={handleClick}>8</button>
      <button onClick={handleClick}>9</button>
     </div>
     <div>
      <button onClick={handleClick}>4</button>
      <button onClick={handleClick}>5</button>
      <button onClick={handleClick}>6</button>
     </div>
     <div>
      <button onClick={handleClick}>1</button>
      <button onClick={handleClick}>2</button>
      <button onClick={handleClick}>3</button>
     </div>
     
    </div>
  );

}



export default Numbers;