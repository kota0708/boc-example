/* @flow */
import React from 'react';
import styled from 'styled-components';

import PageNation from '../molecules/history/page-nation';

import YearList from '../organisms/history/year-list';
import ContentsList from '../organisms/history/contents-list';

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

const History = () => (
  <Wrap>
    <YearListWrap>
      <YearList />
    </YearListWrap>
    <ContentsWrap>
      <ContentsListWrap>
        <ContentsList />
      </ContentsListWrap>
      <PageNationWrap>
        <PageNation year={2017} isNext={false} />
        <PageNation />
      </PageNationWrap>
    </ContentsWrap>
  </Wrap>
);

export default History;
