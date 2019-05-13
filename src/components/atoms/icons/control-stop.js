import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
`;

const ControlStop = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20">
    <g fill="#fff" transform="translate(-10 -10)">
      <polygon points="10 12 18 12 18 10 10 10" />
      <polygon points="22 12 30 12 30 10 22 10" />
      <polygon points="10 30 18 30 18 28 10 28" />
      <polygon points="22 30 30 30 30 28 22 28" />
      <polygon points="10 30 12 30 12 10 10 10" />
      <polygon points="22 30 24 30 24 10 22 10" />
      <polygon points="16 30 18 30 18 10 16 10" />
      <polygon points="28 30 30 30 30 10 28 10" />
    </g>
  </Svg>
);

export default ControlStop;
