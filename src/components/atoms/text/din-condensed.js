// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string, // 表示する文言を受け取る
  size: string // sizeを受け取る
};


const Span = styled.span`
  font-family: 'URWDINCond';

  &.small {
    font-size: 2.4rem;
    font-size: 24px;
    line-height: calc(26 / 24);
    letter-spacing: -0.0001em
  }

  &.medium {
    font-size: 4rem;
    font-size: 40px;
    line-height: calc(36 / 40);
    letter-spacing: -0.0004em
  }

  &.large {
    font-size: 6.4rem;
    font-size: 64px;
    line-height: calc(58 / 64);
    letter-spacing: -0.0001em
  }
`;


const DinCondensed = (props: Props) => {
  const { text, size } = props;

  return <Span className={size}>{text}</Span>;
};

export default DinCondensed;
