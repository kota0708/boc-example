/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import carouselData from '../../constants/stub/top/carousel';
import listData from '../../constants/stub/link/list';
import easeOutQuint from '../../constants/styles/easing/ease-out-quint';

import LogoSymbol from '../atoms/logo/logo-symbol';

import Sns from '../molecules/sns/sns-top';
import GlobalSlide from '../organisms/slide/global-slide';

import MenuContents from '../organisms/menu-contents';

type Props = {
  listData?: Array<Object>, // ページのリンクとページ名を受け取る
  carouselData?: Array<Object>, // トップのカルーセルのデータを受け取る
  onClose: () => void, // 閉じるよう
  currentPageName: string,
  onLogoClick: () => void // 左上のロゴクリック時
};

const Wrap = styled.div`
  padding-bottom: 87px;
`;

const Heading = styled.div`
  padding-left: 10px;
  margin-bottom: 34px;
`;

const StyledLink = styled(Link)`
  transition-property: opacity;
  transition-duration: 0.3s;
  transition-timing-function: ${easeOutQuint};
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;

const LogoWrap = styled.div`
  width: 80px;
  height: 80px;
`;

const MenuWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 75px;
`;

const MenuInner = styled.div`
  /* 284 / 375 * 100% */
  width: 75.73%;
`;

const CarouselWrap = styled.div`
  margin-bottom: 72px;
`;

const Menu = (props: Props) => {

  const {
    listData,
    carouselData,
    onClose,
    currentPageName,
    onLogoClick
  } = props;

  return (
    <Wrap>
      <Heading>
        <StyledLink
          to="/"
          onClick={() => {
            onLogoClick();
          }}
        >
          <LogoWrap>
            <LogoSymbol />
          </LogoWrap>
        </StyledLink>
      </Heading>
      <MenuWrap>
        <MenuInner>
          <MenuContents
            data={listData} // メニューのリンクと名前を受け取る
            onClose={onClose}
            currentPage={currentPageName}
          />
        </MenuInner>
      </MenuWrap>
      <CarouselWrap>
        <GlobalSlide
          data={carouselData} // カルーセルのデータの配列を受け取る
        />
      </CarouselWrap>
      <Sns />
    </Wrap>
  );
};

Menu.defaultProps = {
  listData: listData.data,
  carouselData: carouselData.data
};

export default Menu;
