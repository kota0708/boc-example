/* @flow */
import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby';

// import carouselData from '../../constants/stub/top/carousel';
// import easeOutQuint from '../../constants/styles/easing/ease-out-quint';

// import LogoSymbol from '../atoms/logo/logo-symbol';

import PageNation from '../molecules/history/page-nation';

import YearList from '../organisms/history/year-list';
import ContentsList from '../organisms/history/contents-list';

// import MenuContents from '../organisms/menu-contents';

const Wrap = styled.div`
  display: flex;
  padding: 80px 25px 0;
  overflow: hidden;
`;

const YearListWrap = styled.div`
  margin-right: 45px;
`;

const ContentsListWrap = styled.div`
  /* 240 / (370 - 50) * 100 */
  width: 100%;
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
    <div>
      <ContentsListWrap>
        <ContentsList />
      </ContentsListWrap>
      <PageNationWrap>
        <PageNation isNext={false} />
        <PageNation />
      </PageNationWrap>
    </div>
  </Wrap>
);

export default History;
