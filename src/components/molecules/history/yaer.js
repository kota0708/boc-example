// @flow
import React from 'react';
import styled from 'styled-components';

import Color from '../../../constants/styles/color';
import { SIZE_XSM } from '../../../constants/styles/size';

import DinCondensed from '../../atoms/text/din-condensed';

type Props = {
  year?: number, // 年を受け取る
  onClick?: () => void, // クリックイベントを受け取る
  currentYear?: number, // 現在選ばれている年を受け取る
}

const Button = styled.button`
  outline: none;

  &.gray {
    color: ${Color.GRAY};
  }

  &.black {
    color: ${Color.BLACK};
  }
`;

const Year = (props: Props) => {
  const {
    year,
    onClick,
    currentYear
  } = props;

  const color = (currentYear === year) ? 'black' : 'gray';

  return (
    <Button
      className={color}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <DinCondensed size={SIZE_XSM} text={year} />
    </Button>
  );
};

Year.defaultProps = {
  year: 2018,
  onClick: () => null,
  currentYear: null
};

export default Year;
