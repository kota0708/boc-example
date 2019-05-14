// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string, // 表示する文言を受け取る
  size: string // sizeを受け取る
};


const Span = styled.span`
  font-family: 'URWDINCond';

  &.Xsmall {
    font-size: 16px;
    font-size: 1.6rem;
    line-height: calc(18 / 16);
    letter-spacing: 0;
  }

  &.small {
    font-size: 24px;
    font-size: 2.4rem;
    line-height: calc(26 / 24);
    letter-spacing: -0.0001em
  }

  &.medium {
    font-size: 38px;
    font-size: 3.8rem;
    line-height: calc(36 / 40);
    letter-spacing: -0.0004em
  }

  &.large {
    font-size: 64px;
    font-size: 6.4rem;
    line-height: calc(58 / 64);
    letter-spacing: -0.0001em
  }
`;


const DinCondensed = (props: Props) => {
  const { text, size } = props;

  return <Span className={size}>{text}</Span>;
};

export default DinCondensed;
