// @flow
import React from 'react';
import styled from 'styled-components';
// import Color from '../../../constants/styles/color';

import Heading from '../../molecules/photos/heading';
import PhotoList from '../../organisms/photos/detail/photo-list';

type Props = {
  title: string, // アルバムのタイトル
  amount: Number, // 写真の数を受け取る
  photo: Object, // 写真のデータを受け取る
  openDetail: () => void,
  liveId: string // live id
};

const Wrap = styled.div`
  padding: 120px 0 0;
`;

const HeadingWrap = styled.div`
  padding: 0 25px;
  margin-bottom: 68px;
`;

const ContentsWrap = styled.div`
  width: 100%;
`;

const PhotoListWrap = styled.div`
  margin-bottom: 100px;

  :last-child {
    margin-bottom: 0;
  }
`;

// Photoページのtemplate
const PhotoTemplate = (props: Props) => {
  const {
    photo,
    amount,
    title,
    openDetail,
    liveId
  } = props;
  const photoList = photo ? photo.map(r => (
    <PhotoListWrap key={r.id}>
      <PhotoList
        date={r.date}
        place={r.place}
        photos={r.photos}
        liveId={liveId}
        albumId={r.id}
        openDetail={openDetail}
      />
    </PhotoListWrap>
  )) : null;
  return (
    <Wrap>
      <HeadingWrap>
        <Heading
          title={title}
          amount={amount}
        />
      </HeadingWrap>
      <ContentsWrap>
        {photoList}
      </ContentsWrap>
    </Wrap>
  );
};

export default PhotoTemplate;
