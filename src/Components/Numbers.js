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
      <button>9</button>
     </div>
     <div>
      <button>4</button>
      <button>5</button>
      <button>6</button>
     </div>
     <div>
      <button>1</button>
      <button>2</button>
      <button>3</button>
     </div>
     
    </div>
  );

}



export default Numbers;