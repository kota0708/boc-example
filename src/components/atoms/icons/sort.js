import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
`;

const G = styled.g`
  fill: none;
`;

const PathOut = styled.path`
  fill: ${props => props.theme.colors.white};
`;

const PathIn = styled.path`
  fill: ${props => props.theme.colors.black};
`;

const Sort = () => (
  <Svg width="48" height="40" viewbox="0 0 48 40">
    <G>
      <PathIn d="M48 0H0v40h48z" />
      <PathOut d="M40 10H8v2h32zM40 19H8v2h32z" />
      <PathOut d="M27 8h-6v6h6zM34 26h-6v6h6zM20 17h-6v6h6z" />
      <PathOut d="M40 28H8v2h32z" />
    </G>
  </Svg>
);

export default Sort;
