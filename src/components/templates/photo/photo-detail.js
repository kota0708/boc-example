/* @flow */
import React from 'react';
import styled from 'styled-components';

import Color from '../../../constants/styles/color';
import nl2br from '../../../util/nl2br';
import Image from '../../atoms/image';

type Props = {
  title: string, // タイトル
  index: number, // 表示させるURLIndex
  photoData: Object,
  onClose: () => void;
};

// ----------------------------------------------------------
// todo: ここから下を変更すること！！
// ----------------------------------------------------------
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Color.NAVY};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 2.0rem;
  margin-bottom: 20%;
`;

const Text = styled.p`
  color: #fff;
  font-size: 1.4rem;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  color: #fff;
  outline: none;
  font-size: 1.8rem;
`;

const PhotoDetail = (props: Props) => {
  const {
    photoData,
    title,
    index,
    onClose
  } = props;
  const { date, place, photos } = photoData;
  const url = `/images/photos/${photos[index].filename}`;
  return (
    <Container>
      <Title>{nl2br(title)}</Title>
      <Image imgSrc={url} />
      <Text>{date}</Text>
      <Text>{place}</Text>
      <div>
        <Text>
          {index}
          /
          {photos.length}
        </Text>
      </div>
      <CloseBtn
        onClick={event => {
          event.preventDefault();
          onClose();
        }}
      >
        閉じる
      </CloseBtn>
    </Container>
  );
};
export default PhotoDetail;
