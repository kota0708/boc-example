/* @flow */

import React from 'react';
import styled from 'styled-components';

import Color from '../../../constants/styles/color';

type Props = {
  color?: string,
  isRotate?: boolean, // rotateするかの真偽
}

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  display: block;

  &.rotate {
    transform: rotate(180deg);
  }
`;

const G = styled.g`
  fill-rule: nonzero;

  &.black {
    fill: ${Color.BLACK};
  }

  &.white {
    fill: ${Color.WHITE};
  }
`;

const ArrowLink = (props: Props) => {

  const { color, isRotate } = props;

  const rotate = (isRotate) ? 'rotate' : '';

  return (
    <Svg className={rotate} width="32" height="22" viewBox="0 0 32 22">
      <G className={color}>
        <path d="M0 12h30v-2H0z" />
        <path d="M20.707 21.707l-1.414-1.414L28.586 11l-9.293-9.293L20.707.293 31.414 11z" />
      </G>
    </Svg>
  );
};

ArrowLink.defaultProps = {
  color: 'black',
  isRotate: false
};

export default ArrowLink;
