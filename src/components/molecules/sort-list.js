/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { SIZE_SM } from '../../constants/styles/size';

import DinCondensed from '../atoms/text/din-condensed';
import Close from '../atoms/icons/close';

type Props = {
  categorys?: Array, // カテゴリーのリストを受け取る
  current?: string, // 現在のカテゴリーを受け取る
  linkName?: string, // リンク先の名前を受け取る 例: /newsならnews
  onClick?: () => void // クローズボタンのクリックイベントを受け取る
};

const Wrap = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.black};
  display: block;
`;

const Inner = styled.div`
  padding-top: 40px;
`;


const ListWrap = styled.ul`
  width: 100%;
`;

const Lists = styled.li`
  width: 100%;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 12px 20px 5px;
  position: relative;
  z-index: 1;

  /* カテゴリーが現在の場合 */
  &.current {
    background: ${props => props.theme.colors.gradation};

    & {
      .hover {
        color: ${props => props.theme.colors.black};
      }
    }
  }

  :hover {
    & {
      .hover {
        color: ${props => props.theme.colors.black};
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      margin: auto 0;
      display: block;
      width: 100%;
      height: 100%;
      opacity: 1;
      background: ${props => props.theme.colors.gradation};
      z-index: -1;
    }
  }
`;

const DinCondensedWrap = styled.p`
  color: ${props => props.theme.colors.white};
`;

const CloseWrap = styled.div`
  padding: 23px 34px 34px 0;
  display: flex;
  justify-content: flex-end;
`;

const IconWrap = styled.div`
  width: 21px;
  height: 21px;
  cursor: pointer;
`;

const SortList = (props: Props) => {
  const {
    categorys,
    current,
    onClick,
    linkName
  } = props;

  const list = categorys.map((r, i) => {
    const isCurrent = (current === r) ? 'current' : null;

    return (
      <Lists key={i}>
        <StyleLink className={isCurrent} to={`/${linkName}/?category=${r}`}>
          <DinCondensedWrap className="hover">
            <DinCondensed text={r} size={SIZE_SM} />
          </DinCondensedWrap>
        </StyleLink>
      </Lists>
    );
  });

  return (
    <Wrap>
      <Inner>
        <ListWrap>
          {list}
        </ListWrap>
        <CloseWrap>
          <IconWrap onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
          >
            <Close />
          </IconWrap>
        </CloseWrap>
      </Inner>
    </Wrap>
  );
};

SortList.defaultProps = {
  categorys: [
    'ALL',
    'MUSIC',
    'LIVE',
    'SPOT'
  ],
  current: '',
  linkName: '',
  onClick: () => null
};

export default SortList;
