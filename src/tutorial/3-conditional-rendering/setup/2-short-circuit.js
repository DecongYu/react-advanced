import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState(''); // empty text vs. a text
  const [isError, setIsError] = useState(false);

  // const firstValue = text || 'hello world'; // or operator
  // const secondValue = text && 'hello world'; // if (text) operator

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{ text || 'john Dow' }</h1>
      <button className="btn" onClick={()=> setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>there is an error...</p> : 
      <div>
        <h2>There is no error.</h2>
      </div> }

      {/* {text && <h1>Hello World</h1>} 
      {!text && <h1>Hello World</h1>} */}
    </>
  )
};

export default ShortCircuit;
