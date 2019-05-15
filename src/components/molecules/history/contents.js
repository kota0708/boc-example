/* @flow */
import React from 'react';
import styled from 'styled-components';

import { SIZE_XSM } from '../../../constants/styles/size';
import Color from '../../../constants/styles/color';

import DinCondensed from '../../atoms/text/din-condensed';

type Props = {
  date?: string, // 日付を受け取る
  description?: string, // 詳細を受け取る
  color?: string // 背景の色を受け取る
}

const Wrap = styled.div`
  padding: 16px;

  &.black {
    background-color: ${Color.BLACK}
  }

  &.navy {
    background-color: ${Color.NAVY}
  }
`;

const DateWrap = styled.div`
  margin-bottom: 12px;
  color: ${Color.GRAY};
`;

const DescriptionWrap = styled.p`
  font-size: 14px;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1.71;
  letter-spacing: 0.0004em;
  color: ${Color.WHITE};
`;

const Contents = (props: Props) => {
  const {
    date,
    description,
    color
  } = props;

  return (
    <Wrap className={color}>
      <DateWrap>
        <DinCondensed size={SIZE_XSM} text={date} />
      </DateWrap>
      <DescriptionWrap>{description}</DescriptionWrap>
    </Wrap>
  );
};

Contents.defaultProps = {
  date: '9/16',
  description: '全国アリーナツアー「BUMP OF CHICKEN TOUR 2017-2018 PATHFINDER」スタート全国アリーナツアー「BUMP OF CHICKEN TOUR 2017-2018 PATHFINDER」スタート',
  color: 'black'
};

export default Contents;
