// @flow
import React from 'react';
import styled from 'styled-components';

import { SIZE_XSM } from '../../../constants/styles/size';
import DinCondensed from '../../atoms/text/din-condensed';
// import Color from '../../../constants/styles/color';

import Twitter from '../../atoms/icons/twitter';
import Line from '../../atoms/icons/line';
import FaceBook from '../../atoms/icons/facebook';

const Wrap = styled.div`
  width: 100%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto 0;
    background-color: ${props => props.theme.colors.gray};
    z-index: -1;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ShareText = styled.p`
  color: ${props => props.theme.colors.gray};
  padding: 5px 18px 0 0;
  background-color: ${props => props.theme.colors.white};
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  padding-left: 18px;
  background-color: ${props => props.theme.colors.white};
`;

const ButtonWrap = styled.div`
  margin-right: 23px;
  height: 20px;

  :last-child {
    margin-right: 0;
  }

  &.twitter {
    width: 20px;
  }

  &.line {
    width: 23px;
  }

  &.facebook {
    width: 16px;
  }
`;

const ShareLink = styled.a`
  width: 100%;
  height: 100%;
  display: block;
`;

const Share = () => (
  <Wrap>
    <Inner>
      <ShareText>
        <DinCondensed size={SIZE_XSM} text="SHARE" />
      </ShareText>
      <IconWrap>
        <ButtonWrap className="twitter">
          <ShareLink href="#">
            <Twitter />
          </ShareLink>
        </ButtonWrap>
        <ButtonWrap className="line">
          <ShareLink href="#">
            <Line />
          </ShareLink>
        </ButtonWrap>
        <ButtonWrap className="facebook">
          <ShareLink href="#">
            <FaceBook />
          </ShareLink>
        </ButtonWrap>
      </IconWrap>
    </Inner>
  </Wrap>
);

export default Share;
