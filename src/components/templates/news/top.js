// @flow
import React from 'react';
import styled from 'styled-components';

import listData from '../../../constants/stub/news/list';
import pickUpData from '../../../constants/stub/news/pick-up';

import PickUp from '../../molecules/news/pick-up';
import NewsList from '../../organisms/news';

type Props = {
  listData?: Array<Object>, // newsのリストのデータを受け取る
  pickUpData?: Array<Object>, // ピックアップのデータを受け取る
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
    </Wrap>
  );
};

NewsTop.defaultProps = {
  pickUpData: pickUpData.data,
  listData: listData.data
};

export default NewsTop;
