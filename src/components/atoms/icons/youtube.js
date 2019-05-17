import React from 'react';
import styled from 'styled-components';

// import Color from '../../../constants/styles/color';

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
`;

const Path = styled.path`
  fill: ${props => props.theme.colors.black};
  fill-rule: nonzero;
`;

const YouTube = () => (
  <Svg width="28" height="20" viewBox="0 0 28 20">
    <Path d="M11 5v10l8-5-8-5zm11 15H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h16a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6z" />
  </Svg>
);

export default YouTube;
