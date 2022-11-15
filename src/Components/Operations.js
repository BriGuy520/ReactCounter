

function Operations({operationClick = f => f}){

  return (
    <div>
      <button onClick={operationClick}>X</button>
      <button>/</button>
      <button onClick={operationClick}>+</button>
      <button>-</button>
    </div>
  )
}

export default Operations;