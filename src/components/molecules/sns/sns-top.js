// @flow
import React from 'react';
import styled from 'styled-components';
// import Color from '../../../constants/styles/color';

import Twitter from '../../atoms/icons/twitter';
import Line from '../../atoms/icons/line';
import InstaGram from '../../atoms/icons/instagram';
import YouTube from '../../atoms/icons/youtube';

const Wrap = styled.div`
  width: 100%;
`;

const HeadingWrap = styled.h2`
  font-size: 14px;
  font-size: 1.4rem;
  font-weight: normal;
  text-align: center;
  color: ${props => props.theme.colors.gray};
  margin-bottom: 27px;
`;

const ContentsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SnsWrap = styled.div`
  width: 26px;
  margin-right: 53px;

  :last-child {
    margin-right: 0;
  }
`;

const SnsLink = styled.a`
  display: block;

  :last-child {
    margin-right: 0;
  }
`;

const Sns = () => (
  <Wrap>
    <HeadingWrap>SNSで最新情報をチェック!</HeadingWrap>
    <ContentsWrap>
      <SnsWrap>
        <SnsLink href="#">
          <Twitter />
        </SnsLink>
      </SnsWrap>
      <SnsWrap>
        <SnsLink href="#">
          <Line />
        </SnsLink>
      </SnsWrap>
      <SnsWrap>
        <SnsLink href="#">
          <InstaGram />
        </SnsLink>
      </SnsWrap>
      <SnsWrap>
        <SnsLink href="#">
          <YouTube />
        </SnsLink>
      </SnsWrap>
    </ContentsWrap>
  </Wrap>
);

export default Sns;
