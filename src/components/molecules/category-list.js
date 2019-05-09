/* @flow */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { SIZE_MD } from '../../constants/styles/size';
import Color from '../../constants/styles/color';

import DinCondensed from '../atoms/text/din-condensed';

type Props = {
   link?: string, // linkのurlを受け取る
   chargePage?: string, // 自分が表示するページの名前を受け取る
   currentPage?: string // 現在のページの名前を受け取る
};

const List = styled.li`
  position: relative;
`;

const StyledLink = styled(Link)`
  width: 100%;
  display: block;
  text-decoration: none;
  color: ${Color.BLACK};
  padding: 13px 0 0 20px; /* 13pxはフォント独自の隙間があるため追加が必要 */

  &.hover {
    :hover {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0%;
        margin: auto 0;
        display: block;
        width: 100%;
        height: 100%;
        opacity: 0.22;
        background: ${Color.GRADATION};
        z-index: -1;
      }
    }
  }
`;

// アニメーション用のDOM
// このアニメーションは親でやらせる
const Gradation = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0%;
  margin: auto 0;
  display: block;
  width: 100%;
  height: 100%;
  background: ${Color.GRADATION};
  opacity: 0.22;
  transform: scale(0, 1);
  transform-origin: right;
  z-index: -1;
`;

const CategoryList = (props: Props) => {

  const {
    link,
    chargePage,
    currentPage
  } = props;

  // 現在表示しているページと同じ名前かどうかで表示を変える
  const hasList = (chargePage === currentPage)
    ? (
      <StyledLink to={link}>
        <DinCondensed size={SIZE_MD} text={chargePage} />

        {/* ここのクラスネームを使って親でアニメーション定義する */}
        <Gradation className="gradation" />
      </StyledLink>
    )
    : (
      <StyledLink className="hover" to={link}>
        <DinCondensed size={SIZE_MD} text={chargePage} />
      </StyledLink>
    );

  return (
    <List>
      {hasList}
    </List>
  );
};

CategoryList.defaultProps = {
  link: '/photo',
  chargePage: 'PHOTO',
  currentPage: 'test'
};

export default CategoryList;
