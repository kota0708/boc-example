/* @flow */
import React from 'react';
import styled from 'styled-components';

import PageNation from '../molecules/history/page-nation';

import YearList from '../organisms/history/year-list';
import ContentsList from '../organisms/history/contents-list';
import type { THistory } from '../../flow';

type Props = {
  yearList: Array<number>, // 年のリスト2019 ~ 2017みたいなやつ
  data: Array<THistory>,
  onClick: () => void,
  onNext: () => void,
  onPrev: () => void,
  currentYear: string, // 表示してる年
  nextYear: string, // 次の年
  prevYear: string // 前の年
};

const Wrap = styled.div`
  display: flex;
  padding: 80px 25px 0;
  overflow: hidden;
`;

const YearListWrap = styled.div`
  margin-right: 45px;
`;

const ContentsWrap = styled.div`
  width: 100%;
`;

const ContentsListWrap = styled.div`
  margin-bottom: 36px;
`;

const PageNationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const History = (props: Props) => {
  const {
    yearList,
    data,
    onClick,
    currentYear,
    prevYear,
    nextYear,
    onNext,
    onPrev
  } = props;

  const next = (nextYear.length > 0) ? (
    <PageNation
      isNext
      year={nextYear}
      onClick={onNext}
    />
  ) : null;
  const prev = (prevYear.length > 0) ? (
    <PageNation
      isNext={false}
      year={prevYear}
      onClick={onPrev}
    />
  ) : null;
  return (
    <Wrap>
      <YearListWrap>
        <YearList
          years={yearList}
          onClick={onClick}
          currentYear={currentYear}
        />
      </YearListWrap>
      <ContentsWrap>
        <ContentsListWrap>
          <ContentsList data={data} />
        </ContentsListWrap>
        <PageNationWrap>
          {prev}
          {next}
        </PageNationWrap>
      </ContentsWrap>
    </Wrap>
  );
};

export default History;
