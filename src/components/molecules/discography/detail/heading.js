/* @flow */
import React from 'react';
import styled from 'styled-components';

import { SIZE_XSM } from '../../../../constants/styles/size';
import Color from '../../../../constants/styles/color';

import Image from '../../../atoms/images/fit-image';
import DinCondensed from '../../../atoms/text/din-condensed';

type Props = {
  imgUrl?: string, // 画像のurlを受け取る
  type?: string, // discographyの種類を受け取る
  title?: string // discographyのタイトルを受け取る
}

const Wrap = styled.div`
  width: 100%;
`;

const ImageWrap = styled.div`
  /* 236 / 375 * 100 */
  width: 62.9%;
  margin: 0 auto 36px;
`;

const DinCondensedWrap = styled.p`
  color: ${Color.GRAY};
  margin-bottom: 13px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-size: 2.4rem;
  font-weight: normal;
  line-height: 1.33;
  letter-spacing: 0.0002em;
`;

const ContentWrap = styled.div`
  padding: 0 25px;
`;

const DiscographyList = (props: Props) => {
  const {
    imgUrl,
    type,
    title
  } = props;

  return (
    <Wrap>
      <ImageWrap>
        <Image url={imgUrl} />
      </ImageWrap>
      <ContentWrap>
        <DinCondensedWrap>
          <DinCondensed size={SIZE_XSM} text={type} />
        </DinCondensedWrap>
        <Title>{title}</Title>
      </ContentWrap>
    </Wrap>
  );
};

DiscographyList.defaultProps = {
  // 仮のデータです
  // TODO: 後でJSONかjsで外部化する
  imgUrl: '/images/photos/0.jpg',
  type: 'SINGLE',
  title: 'Aurora'
};

export default DiscographyList;
