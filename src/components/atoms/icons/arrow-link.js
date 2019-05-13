import React from 'react';
import styled from 'styled-components';

import Color from '../../../constants/styles/color';

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
`;

const G = styled.g`
  fill: ${Color.BLACK};
  fill-rule: nonzero;
`;

const ArrowLink = () => (
  <Svg width="32" height="22" viewBox="0 0 32 22">
    <G>
      <path d="M0 12h30v-2H0z" />
      <path d="M20.707 21.707l-1.414-1.414L28.586 11l-9.293-9.293L20.707.293 31.414 11z" />
    </G>
  </Svg>
);

export default ArrowLink;
