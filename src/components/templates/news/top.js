// @flow
import React from 'react';
import styled from 'styled-components';

import PickUp from '../../molecules/news/pick-up';
import NewsList from '../../organisms/news';
import Sort from '../../organisms/sort';
import type { TNewsList, TNewsPickup } from '../../../flow';

type Props = {
  listData: Array<TNewsList>, // newsのリストのデータを受け取る
  pickUpData: Array<TNewsPickup>, // ピックアップのデータを受け取る
};

const Wrap = styled.div`
  padding-top: 80px;
`;

const PickUpWrap = styled.div`
  margin-bottom: 30px;
`;

const NewsTop = (props: Props) => {
  const { listData, pickUpData } = props;
  // ピックアップがない場合は非表示
  const pickUp = (pickUpData.length !== 0) ? (
    <PickUpWrap>
      <PickUp data={pickUpData} />
    </PickUpWrap>
  ) : null;

  return (
    <Wrap>
      {pickUp}
      <NewsList data={listData} />
      <Sort />
    </Wrap>
  );
};

export default NewsTop;
