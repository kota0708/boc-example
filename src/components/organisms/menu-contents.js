// @flow
import React from 'react';
import styled from 'styled-components';
import CategoryList from '../molecules/category-list';

import listData from '../../constants/stub/link/list';

type Props = {
  data?: Array<Object>, // ページのリンクとページ名を受け取る
  currentPage?: string, // 現在のページ名を受け取る
  onClose: () => void // 閉じるよう
};

const ListWrap = styled.div`
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;

const MenuContents = (props: Props) => {
  const { data, currentPage, onClose } = props;

  const menuLists = data.map((r, i) => (
    <ListWrap key={i}>
      <CategoryList
        link={r.link}
        pageName={r.pageName}
        currentPage={currentPage}
        onClose={onClose}
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
  data: listData.data,
  currentPage: 'PHOTO'
};

export default MenuContents;
