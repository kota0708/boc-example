/* @flow */
import React from 'react';
import styled from 'styled-components';

import carouselData from '../../constants/stub/top/carousel';
import listData from '../../constants/stub/menu/list';

import LogoSymbol from '../atoms/logo/logo-symbol';

import Sns from '../molecules/sns/sns-top';
import Carousel from '../molecules/slide/carousel';

import MenuContents from '../organisms/menu-contents';

type Props = {
  listData?: Array<Object>, // ページのリンクとページ名を受け取る
  carouselData?: Array<Object> // カルーセルのデータを受け取る
};

const Wrap = styled.div`
  padding-bottom: 87px;
`;

const Heading = styled.div`
  padding-left: 18px;
  margin-bottom: 34px;
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
  width: 75.7333333%;
`;

const CarouselWrap = styled.div`
  margin-bottom: 72px;
`;

const Menu = (props: Props) => {

  const { listData, carouselData } = props;

  return (
    <Wrap>
      <Heading>
        <LogoWrap>
          <LogoSymbol />
        </LogoWrap>
      </Heading>
      <MenuWrap>
        <MenuInner>
          <MenuContents
            data={listData} // メニューのリンクと名前を受け取る
          />
        </MenuInner>
      </MenuWrap>
      <CarouselWrap>
        <Carousel
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
