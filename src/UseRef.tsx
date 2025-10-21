import React, { useRef } from 'react'

const UseRef = () => {
  
  const inputRef = useRef();

  const handleClick = () => {
  alert(inputRef.current.value);
}



  return (
    <div>
      <h2>UseREf Component</h2>
      <h1>Hola Potranca</h1>

      <input type='text' ref={inputRef}></input>
      <button onClick={handleClick}>UseRef</button>

    </div>
  )

}



export default UseRef
