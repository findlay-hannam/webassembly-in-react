import React, { useState } from 'react';
import waApi from './wa-api';

export default function WasmCalculator() {
  const [value, setValue] = useState(5);
  const [result, setResult] = useState();
  const [time, setTime] = useState();

  async function timeFibonacci(value) {
    const startTime = Date.now();
    setResult((await waApi).exports.fibonacci(value));
    setTime(Date.now() - startTime);
  }

  return (
      <div>
        <h2>WASM Calculator</h2>
        <p>
        The <input value={value} onChange={evt => setValue(evt.target.value)} />th fibonacci number is {result}
      </p>
      <button onClick={() => timeFibonacci(value)}>
        Calculate
      </button>
      <div>
        Calculation took {time}ms
      </div>
      </div>
  );
}