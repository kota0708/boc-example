import React from 'react';
import styled from 'styled-components';

// import Color from '../../../constants/styles/color';

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
`;

const Path = styled.path`
  // color: ${props => props.theme.colors.white100};
  fill: ${props => props.theme.colors.black};
  fill-rule: nonzero;
`;

const FaceBook = () => (
  <Svg width="14" height="26" viewBox="0 0 14 26">
    <Path fill-rule="nonzero" d="M3.508 26h5.229l.004-12 4.75-.002L14 9.173H8.737l.007-2.415c0-1.258.086-1.931 1.886-1.931h3.325V0H9.188C4.567 0 3.503 2.396 3.503 6.332l.005 2.841L0 9.175V14h3.508v12z" />
  </Svg>
);

export default FaceBook;
