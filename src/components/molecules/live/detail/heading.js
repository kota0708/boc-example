/* @flow */
import React from 'react';
import styled from 'styled-components';

import { SIZE_XSM } from '../../../../constants/styles/size';
import nl2br from '../../../../util/nl2br';

import DinCondensed from '../../../atoms/text/din-condensed';

type Props = {
  imgUrl?: string, // 画像のurlを受け取る
  year?: string, // 記事の年を受け取る
  title?: string // 記事のタイトルを受け取る
}

const Wrap = styled.div`
  width: 100%;
`;

const Image = styled.div`
  width: 100%;
  height: 160px;
  display: block;
  margin-bottom: 36px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.navy};
`;

const ContentsWrap = styled.div`
  padding: 0 25px;
`;

const YearWrap = styled.p`
  color: ${props => props.theme.colors.gray};
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-size: 2.4rem;
  font-weight: normal;
  line-height: 1.33;
  letter-spacing: 0.0002em;
  color: ${props => props.theme.colors.black};
`;

const List = (props: Props) => {
  const {
    imgUrl,
    title,
    year
  } = props;

  return (
    <Wrap>
      <Image style={{ backgroundImage: `url(${imgUrl})` }} />
      <ContentsWrap>
        <YearWrap>
          <DinCondensed size={SIZE_XSM} text={year} />
        </YearWrap>
        <Title>{nl2br(title)}</Title>
      </ContentsWrap>
    </Wrap>
  );
};

List.defaultProps = {
  // 仮のデータです
  // TODO: 後でJSONかjsで外部化する
  imgUrl: '/images/photos/0.jpg',
  title: 'BUMP OF CHICKEN\nTOUR 2017-2018\nPATHFINDER',
  year: '2019'
};

export default List;
