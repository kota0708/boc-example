// @flow
import React from 'react';
import styled from 'styled-components';

import { SIZE_SM } from '../../../constants/styles/size';

import DinCondensed from '../../atoms/text/din-condensed';

import Heading from '../../molecules/discography/detail/heading';
import Share from '../../molecules/sns/sns-share';

import DetailContents from '../../organisms/discography/detail-contents';
import GlobalSlide from '../../organisms/slide/global-slide';

const Wrap = styled.div`
  padding-top: 80px;
`;

const HeadingWrap = styled.div`
  margin-bottom: 60px;
`;

const ContentsWrap = styled.div`
  margin-bottom: 80px;
`;

const ShareWrap = styled.div`
  margin-bottom: 80px;
  padding: 0 25px;
`;

const GlobalSlideTitle = styled.h2`
  font-weight: 500;
  margin-bottom: 40px;
  padding: 0 25px;
`;


const Detail = () => (
  <Wrap>
    <HeadingWrap>
      <Heading />
    </HeadingWrap>
    <ContentsWrap>
      <DetailContents />
    </ContentsWrap>
    <ShareWrap>
      <Share />
    </ShareWrap>
    <GlobalSlideTitle>
      <DinCondensed size={SIZE_SM} text="RELATED CONTENT" />
    </GlobalSlideTitle>
    <GlobalSlide />
  </Wrap>
);

export default Detail;
