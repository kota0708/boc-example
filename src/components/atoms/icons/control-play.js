import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
`;

const ControlPlay = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20">
    <path fill="#fff" fillRule="evenodd" d="M10 0H0v20h10l10-10L10 0zm-.829 2l8 8-8 8H2V2h7.171z" />
  </Svg>
);
export default ControlPlay;
