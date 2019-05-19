/* @flow */
import React, { useEffect } from 'react';
import styled from 'styled-components';

type Props = {
  imgUrl?: string // 背景画像を受け取る
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 0 50%; /* ここの数値をいじれば移動します */
`;

const BgImage = (props: Props) => {
  const {
    imgUrl
  } = props;

  useEffect(() => {
    console.log('ここでbgのスライドアニメーションを設定する');
  });

  return (
    <Wrap className="bg-image" style={{ backgroundImage: `url(${imgUrl})` }} />
  );
};

BgImage.defaultProps = {
  imgUrl: '/images/photos/0.jpg'
};

export default BgImage;
