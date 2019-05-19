/* @flow */
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import { TweenLite, Power0 } from 'gsap';

import SortList from '../molecules/sort-list';
import SortIcon from '../atoms/icons/sort';

type Props = {
  categorys?: Array, // カテゴリーのリストを受け取る
  current?: string, // 現在のカテゴリーを受け取る
  linkName?: string, // リンク先の名前を受け取る 例: /newsならnews
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
`;

const SortListWrap = styled.div`
  /* 284 / 375 * 100 */
  width: 75.7%;
  max-width: 400px;
  position: fixed;
  right: 0;
  z-index: 2;
  opacity: 0;
`;

const IconWrap = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 40px;
  height: 40px;
  z-index: 1;
  cursor: pointer;
`;

const Sort = (props: Props) => {

  const {
    categorys,
    current,
    linkName
  } = props;

  let SortListDom = useRef(null); // リストのDOMを取得

  // state
  const [getListHeight, setListHeight] = useState(0);
  const [getIsOpen, updateIsOpen] = useState(false);

  // mount
  useEffect(() => {
    const height = SortListDom.clientHeight; // sortlistの高さを格納

    setListHeight(height); // stateに格納
  }, []);

  const onClick = () => {
    const list = SortListDom; // domを継承

    // メニューが開いているか確認
    if (!getIsOpen) {
      TweenLite.to(list, 0.3, {
        bottom: 0,
        ease: Power0.easeNone,
        onStart: () => {
          list.style.opacity = 1;
        }
      });
    } else {
      TweenLite.to(list, 0.3, {
        bottom: `-${getListHeight}px`,
        ease: Power0.easeNone,
        onComplete: () => {
          list.style.opacity = 0;
        }
      });
    }

    updateIsOpen(!getIsOpen); // stateを反転
  };

  return (
    <Wrap width="22" height="22" viewBox="0 0 22 22">
      <SortListWrap
        style={{ bottom: `-${getListHeight}px` }}
        ref={el => {
          SortListDom = el;
        }}
      >
        <SortList
          onClick={onClick}
          categorys={categorys}
          current={current}
          linkName={linkName}
        />
      </SortListWrap>
      <IconWrap
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        <SortIcon />
      </IconWrap>
    </Wrap>
  );
};

Sort.defaultProps = {
  categorys: [
    'ALL',
    'MUSIC',
    'LIVE',
    'SPOT'
  ],
  current: 'MUSIC',
  linkName: ''
};

export default Sort;
