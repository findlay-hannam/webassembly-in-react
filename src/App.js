import React from 'react';
import WasmCalculator from './WasmCalculator';
import JsCalculator from './JsCalculator';
import Link from './Link';

export default function App() {
  return (
    <div className="App">
      <WasmCalculator />
      <JsCalculator />
      <Link />
    </div>
  );
}
