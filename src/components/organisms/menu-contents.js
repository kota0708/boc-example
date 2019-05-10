// @flow
import React from 'react';
import styled from 'styled-components';
import MenuList from '../molecules/category-list';

type Props = {
  data?: Array<Object>, // ページのリンクとページ名を受け取る
  currentPage?: string // 現在のページ名を受け取る
};

const ListWrap = styled.div`
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;

const MenuContents = (props: Props) => {
  const { data, currentPage } = props;

  const menuLists = data.map((r, i) => (
    <ListWrap>
      <MenuList
        key={i}
        link={r.link}
        chargePage={r.chargePage}
        currentPage={currentPage}
      />
    </ListWrap>
  ));

  return (
    <div>
      {menuLists}
    </div>
  );
};

MenuContents.defaultProps = {
  data: [
    {
      link: '/photo',
      chargePage: 'PHOTO'
    },
    {
      link: '/movie',
      chargePage: 'MOVIE'
    },
    {
      link: '/news',
      chargePage: 'NEWS'
    }
  ],
  currentPage: 'PHOTO'
};

export default MenuContents;
