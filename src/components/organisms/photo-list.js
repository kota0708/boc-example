// @flow
import React, { Fragment } from 'react';
import styled from 'styled-components';

import Color from '../../constants/styles/color';
import DotLoader from '../atoms/dot-loader';
import ArtistImage from '../molecules/artist-image';

type Props = {
  date: string, // 日付をうけとる
  place: string, // 開催日をうけとる
  photos: string[], // 写真のurlの配列を受け取る
  isMore?: boolean, // moreボタンを表示するかどうかの真偽
  onClick?: () => void, // moreボタンのクリックイベントを受け取る
  // liveId?: string, // ライブのID
  albumId?: string, // アルバムのID
  openDetail?: () => void
};

const ListHeading = styled.div`
  width: 100%;
  padding: 0 25px;
  margin-bottom: 17px;
`;

const ListText = styled.p`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  margin-bottom: 5px;

  :last-child {
    margin-bottom: 0;
  }
`;

const ContentsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${Color.NAVY};
`;

const LoaderWrap = styled.div`
  width: 33.333%;
  position: relative;
  cursor: pointer;
`;

// アーティストの写真一覧
const PhotoList = (props: Props) => {
  const {
    date,
    place,
    photos,
    isMore,
    onClick,
    albumId,
    openDetail
  } = props;

  const photoImages = (photos.length !== 0 || photos !== null)
    ? (
      photos.map(d => {
        const src = `/images/photos/${d.filename}`;
        return (
          <ArtistImage
            imgSrc={src}
            picId={d.id}
            albumId={albumId}
            onClick={openDetail}
            key={d.id}
          />
        );
      })
    )
    : null;

  return (
    <Fragment>
      <ListHeading>
        <ListText>{date}</ListText>
        <ListText>{place}</ListText>
      </ListHeading>
      <ContentsWrap>
        {photoImages}
        {/* 写真が全て表示していなかったらloaderを表示 */}
        {isMore ? (
          <LoaderWrap
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
          >
            <DotLoader />
          </LoaderWrap>
        ) : null}
      </ContentsWrap>
    </Fragment>
  );
};

PhotoList.defaultProps = {
  isMore: true,
  onClick: () => null,
  // liveId: '',
  albumId: '',
  openDetail: () => null
};

export default PhotoList;
