/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { SIZE_XSM } from '../../../../constants/styles/size';
import nl2br from '../../../../util/nl2br';

import DinCondensed from '../../../atoms/text/din-condensed';

type Props = {
  imgUrl?: string, // 画像のurlを受け取る
  link?: string, // liveの中ページのurlを受け取る
  title?: string, // liveのタイトルを受け取る
  year?: string // ツアーの年を受け取る
}

const Wrap = styled.div`
  width: 100%;
`;

const StyleLink = styled(Link)`
  display: block;
  padding: 20px 0;
  text-decoration: none;
  position: relative;

  :hover {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.22;
      transform: scaleX(-1);
      background: ${props => props.theme.colors.gradation};
      z-index: -1;
    }
  }
`;

const StyleLinkInner = styled.div`
  display: flex;
`;

const ImageWrap = styled.div`
  width: 80px;
  height: 160px;
`;

const Image = styled.div`
  width: 80px;
  height: 160px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

const Contents = styled.div`
  width: calc(100% - 105px);
  padding-left: 25px;
  margin-right: 32px;
`;

const YearWrap = styled.div`
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
    link,
    title,
    year
  } = props;

  return (
    <Wrap>
      <StyleLink to={link}>
        <StyleLinkInner>
          <Contents>
            <YearWrap>
              <DinCondensed size={SIZE_XSM} text={year} />
            </YearWrap>
            <Title>{nl2br(title)}</Title>
          </Contents>
          <ImageWrap>
            <Image style={{ backgroundImage: `url(${imgUrl})` }} />
          </ImageWrap>
        </StyleLinkInner>
      </StyleLink>
    </Wrap>
  );
};

List.defaultProps = {
  // 仮のデータです
  // TODO: 後でJSONかjsで外部化する
  imgUrl: '/images/photos/0.jpg',
  link: '/discography/pages',
  title: 'BUMP OF CHICKEN\nTOUR 2017-2018\nPATHFINDER',
  year: '2019'
};

export default List;
