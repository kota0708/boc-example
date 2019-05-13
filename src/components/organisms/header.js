/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import LogoSymbol from '../atoms/logo/logo-symbol';
import DinCondensed from '../atoms/text/din-condensed';
import MenuButton from '../molecules/menu-button';
import { SIZE_SM, SIZE_LG } from '../../constants/styles/size';
// 全部いっぺんに読み込みできる方法。（あまりよろしくない。）
// import easing from '../../constants/styles/easing';
// console.log(easing.easeInQuad);
// こんな形で必要なものだけをimportするように。
import easeOutQuint from '../../constants/styles/easing/ease-out-quint';

type Props = {
  isMenuOpen: boolean, // メニュー開閉用のflag
  onClick: () => void, // メニュークリック時
  pageName: string
};

const HeadeWrap = styled.header`
  width: 100%;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
`;

const HeaderTitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const SymbolWrap = styled.h1`
  width: 80px;
  height: 80px;

  &.large {
    width: 140px;
    height: 140px;
  }
`;

const DinCondensedWrap = styled.div`
  margin-left: 13px;
`;

const ButtonWrap = styled.div`
  display: block;
  position: fixed;
  top: 23px;
  right: 0;
  z-index: 5;
`;

const ButtonInner = styled.div`
  width: 56px;
`;

// ここ勝手に変えて。
// こんな形で既存のComponentをextendsして上書きが可能。
const StyledLink = styled(Link)`
  transition-property: opacity;
  transition-duration: 0.3s;
  transition-timing-function: ${easeOutQuint};
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;

// ヘッダーコンポーネント
const Header = (props: Props) => {
  const { isMenuOpen, pageName, onClick } = props;

  // topの場合シンボルの大きさを変える
  const symbol = pageName.length === 0 ? (
    <SymbolWrap className={SIZE_LG}>
      <LogoSymbol />
    </SymbolWrap>
  ) : (
    <SymbolWrap>
      <LogoSymbol />
    </SymbolWrap>
  );

  const dinCondensed = pageName.length === 0 ? null : (
    <DinCondensed
      text={pageName}
      size={SIZE_SM}
    />
  );
  return (
    <HeadeWrap isMenuOpen={isMenuOpen}>
      <HeaderInner>
        <HeaderTitleWrap>
          <StyledLink to="/">
            {symbol}
          </StyledLink>
          <DinCondensedWrap>
            {dinCondensed}
          </DinCondensedWrap>
        </HeaderTitleWrap>
        <ButtonWrap>
          <ButtonInner>
            <MenuButton onClick={onClick} />
          </ButtonInner>
        </ButtonWrap>
      </HeaderInner>
    </HeadeWrap>
  );
};

export default Header;
