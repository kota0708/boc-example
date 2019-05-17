import React from 'react';
import styled from 'styled-components';

// import Color from '../../../constants/styles/color';

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
`;

const G = styled.g`
  fill: ${props => props.theme.colors.black};
  fill-rule: nonzero;
`;

const InstaGram = () => (
  <Svg width="28" height="28" viewBox="0 0 28 28">
    <G>
      <path d="M20 0H8a8 8 0 0 0-8 8v12a8 8 0 0 0 8 8h12a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8m0 2c3.309 0 6 2.691 6 6v12c0 3.309-2.691 6-6 6H8c-3.309 0-6-2.691-6-6V8c0-3.309 2.691-6 6-6h12" />
      <path d="M14 8a6 6 0 0 0 0 12 6 6 0 0 0 0-12m0 2c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4M23 7a2 2 0 1 1-4.001-.001A2 2 0 0 1 23 7" />
    </G>
  </Svg>

);

export default InstaGram;
