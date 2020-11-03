import React from 'react';
import styled from 'styled-components';

const A = styled.a`
:hover {
  color: red;
}
`;

export default function Link() {
  return <A href="#">Hover me</A>
}