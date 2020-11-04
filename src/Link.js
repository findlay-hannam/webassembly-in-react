import React from 'react';
import styled from 'styled-components';

const A = styled.a`
:hover {
  color: red;
}
`;

export default function Link() {
  return (
    <div>
      <A href="https://wasm.continuation-labs.com/d3demo/">DOOM 3</A>
      <A href="https://calculator.platform.uno/">Windows calculator</A>
      <A href="https://squoosh.app/">Squoosh</A>
    </div>
  );
}