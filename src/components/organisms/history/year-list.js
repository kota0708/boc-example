/* @flow */
import React, { Fragment } from 'react';
import styled from 'styled-components';

import Year from '../../molecules/history/yaer';

type Props = {
  years: Array<number>, // 年の配列を受け取る
  onClick: () => void, // クリックイベントを受け取る
  currentYear: string // 現在選ばれている年を受け取る
}

const Wrap = styled.div`
  margin-bottom: 14px;

  :last-child {
    margin-bottom: 0;
  }
`;

const YearList = (props: Props) => {
  const {
    years,
    onClick,
    currentYear
  } = props;

  const year = years.map((r, i) => (
    <Wrap key={i}>
      <Year
        year={r}
        onClick={onClick}
        currentYear={currentYear}
      />
    </Wrap>
  ));

  return (
    <Fragment>
      { year }
    </Fragment>
  );
};

export default YearList;
