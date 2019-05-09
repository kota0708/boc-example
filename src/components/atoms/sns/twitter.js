import React from 'react';
import styled from 'styled-components';

import Color from '../../../constants/styles/color';

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
`;

const Path = styled.path`
  fill: ${Color.BLACK};
  fill-rule: nonzero;
`;

const Twitter = () => (
  <Svg width="26" height="20" viewBox="0 0 26 20">
    <Path d="M25.282.37c-1.03.578-2.172.998-3.388 1.225A5.464 5.464 0 0 0 18 0c-2.946 0-5.334 2.262-5.334 5.05 0 .395.047.78.138 1.15C8.373 5.99 4.443 3.978 1.812.923a4.806 4.806 0 0 0-.721 2.538c0 1.753.942 3.3 2.372 4.203a5.558 5.558 0 0 1-2.416-.633v.063c0 2.446 1.839 4.487 4.277 4.952a5.622 5.622 0 0 1-2.41.086c.68 2.007 2.65 3.466 4.983 3.508a11.094 11.094 0 0 1-6.625 2.162c-.43 0-.854-.025-1.272-.07A15.728 15.728 0 0 0 8.176 20c9.81 0 15.176-7.695 15.176-14.369 0-.219-.005-.437-.016-.654A10.483 10.483 0 0 0 26 2.367c-.957.4-1.984.673-3.062.794 1.1-.624 1.946-1.615 2.344-2.792" />
  </Svg>

);

export default Twitter;
