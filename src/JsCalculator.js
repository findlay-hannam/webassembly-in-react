import React, { useState } from 'react';

function fibonacci(num) {
  let result = 0;
  if (num < 2) {
    result = num;
  } else {
    result = fibonacci(num - 1) + fibonacci(num - 2);
  }
  return result;
}

export default function JsCalculator() {
  const [value, setValue] = useState(5);
  const [result, setResult] = useState();
  const [time, setTime] = useState();

  function timeFibonacci() {
    const startTime = Date.now();
    setResult(fibonacci(value));
    setTime(Date.now() - startTime);
  }

  return (
    <div>
      <h2>JS Calculator</h2>
      <p>
        The <input value={value} onChange={evt => setValue(evt.target.value)} />th fobinacci number is {result}
      </p>
      <button onClick={() => timeFibonacci(value)}>
        Calculate
      </button>
      <div>
        Calculation took {time}ms
      </div>
    </div>
  )
}