/* @flow */
import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import { SIZE_MD } from '../../constants/styles/size';
// import Color from '../../constants/styles/color';

import DinCondensed from '../atoms/text/din-condensed';

type Props = {
  link: string, // linkのurlを受け取る
  pageName: string, // 自分が表示するページの名前を受け取る
  currentPage: string, // 現在のページの名前を受け取る
  onClose: () => void // 閉じるよう
};

const List = styled.li`
  position: relative;
`;

const StyledLink = styled.a`
  width: 100%;
  display: block;
  text-decoration: none;
  color: ${props => props.theme.colors.black};
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
        background: ${props => props.theme.colors.gradation};
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
  background: ${props => props.theme.colors.gradation};
  opacity: 0.22;
  transform: scale(0, 1);
  transform-origin: right;
  z-index: -1;
`;

const CategoryList = (props: Props) => {
  const {
    link,
    pageName,
    currentPage,
    onClose
  } = props;
  const isCurrent = pageName === currentPage;
  const hoverClassName = isCurrent ? '' : 'hover';
  const gradation = isCurrent ? (
    <Gradation className="gradation" />
  ) : null;
  return (
    <List>
      <StyledLink
        className={hoverClassName}
        href="#"
        onClick={(event) => {
          event.preventDefault();
          onClose();
          navigate(link);
        }}
      >
        <DinCondensed size={SIZE_MD} text={pageName} />
        {gradation}
      </StyledLink>
    </List>
  );
};

export default CategoryList;
