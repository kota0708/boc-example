// @flow
import React from 'react';
import styled from 'styled-components';
import Color from '../../../constants/styles/color';

import photoListData from '../../../constants/stub/photo-list-data';
import PhotoList from '../../organisms/photo-list';
import nl2br from '../../../util/nl2br';

type Props = {
  title?: string, // アルバムのタイトル
  amount?: Number, // 写真の数を受け取る
  photo?: Object, // 写真のデータを受け取る
  openDetail: () => void
};

const Wrap = styled.div`
  padding: 120px 0 0;
`;

const HeadingWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  margin-bottom: 68px;
`;

const HeadingTitleWrap = styled.h2`
  font-size: 24px;
  font-size: 2.4rem;
  font-weight: normal;
  line-height: 1.33;
  letter-spacing: 0.0002em;
`;

const HeadingText = styled.span`
  display: block;
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;

const HeadingAmount = styled.p`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  color: ${Color.GRAY};
  letter-spacing: 0.0004em;
  align-self: flex-end;
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
    openDetail
  } = props;
  const photoList = (photo && photo.data) ? photo.data.map((r, i) => (
    <PhotoListWrap key={i}>
      <PhotoList
        date={r.date}
        place={r.place}
        photos={r.photos}
        liveId={photoListData.id}
        albumId={r.id}
        openDetail={openDetail}
      />
    </PhotoListWrap>
  )) : null;
  return (
    <Wrap>
      <HeadingWrap>
        <HeadingTitleWrap>
          <HeadingText>
            {nl2br(title)}
          </HeadingText>
        </HeadingTitleWrap>
        <HeadingAmount>
          {amount}
          &nbsp;photos
        </HeadingAmount>
      </HeadingWrap>
      <ContentsWrap>
        {photoList}
      </ContentsWrap>
    </Wrap>
  );
};

PhotoTemplate.defaultProps = {
  title: photoListData.title,
  amount: 245,
  photo: photoListData
};

export default PhotoTemplate;
