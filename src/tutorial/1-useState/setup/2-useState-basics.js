import React, { useState } from 'react';

// use ---as pre-x is a must in function to define default value
// component must be in uppercase -- UseStateBasic
//must be in the function/component body
//cannot call conditionally

const UseStateBasics = () => {
  const [text,setText] = useState('random title'); //default value in bracket
  const handleClick = () => {
    if (text === 'random title')
    { setText('hello world') }
    else
    { setText('random title') }
  };
  return (
    <>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
