import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
`;

const G = styled.g`
  fill: ${props => props.theme.colors.black};
  fill-rule: nonzero;
`;

const Close = () => (
  <Svg width="22" height="22" viewBox="0 0 22 22">
    <G>
      <path d="M20.293 21.707l-20-20L1.707.293l20 20z" />
      <path d="M1.707 21.707L.293 20.293l20-20 1.414 1.414z" />
    </G>
  </Svg>
);
export default Close;
