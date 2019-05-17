/* @flow */
import React from 'react';
import styled from 'styled-components';

import nl2br from '../../../../util/nl2br';

type Props = {
  imgUrl?: string, // 画像のurlを受け取る
  title?: string, // アルバムタイトルを受け取る
  description?: string // アルバムの詳細
}

const Wrap = styled.div`
  width: 100%;
  display: flex;
`;

const ImageWrap = styled.div`
  /* 86 / (375 - 50) * 100 */
  width: 26.5%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ContentWrap = styled.div`
  /* 218 / (375 - 50) * 100 */
  width: 67.1%;
  margin-left: 20px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-size: 2rem;
  font-weight: normal;
  line-height: 1.6;
  letter-spacing: 0.0004em;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  letter-spacing: 0.4px;
  color: ${props => props.theme.colors.gray};
`;

const AlbumHeading = (props: Props) => {
  const {
    imgUrl,
    title,
    description
  } = props;

  return (
    <Wrap>
      <ImageWrap>
        <Image src={imgUrl} />
      </ImageWrap>
      <ContentWrap>
        <Title>{title}</Title>
        <Description>{nl2br(description)}</Description>
      </ContentWrap>
    </Wrap>
  );
};

AlbumHeading.defaultProps = {
  // 仮のデータです
  // TODO: 後でJSONかjsで外部化する
  imgUrl: '/images/photos/0.jpg',
  title: 'Blu-ray初回限定盤',
  description: 'スペシャルBOX仕様\n豪華120ページフォトブックレット＆歌詞カード付き\nTFXQ-78165 / ¥8,000＋税'
};

export default AlbumHeading;
