import React, { useState } from 'react';
import waApi from './wa-api';

export default function App() {
  const [value, setValue] = useState(5);
  const [result, setResult] = useState();
  waApi.then(console.log);
  return (
    <div className="App">
      <p>
        The factorial of
        <input value={value} onChange={evt => setValue(evt.target.value)} />
        is {result}
      </p>
      <button onClick={async () => setResult((await waApi).exports.factorial(value))}>
        Calculate
      </button>
    </div>
  );
}