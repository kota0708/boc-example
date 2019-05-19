/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { SIZE_XSM } from '../../../../constants/styles/size';
import nl2br from '../../../../util/nl2br';
import { TLiveTop } from '../../../../flow';

import DinCondensed from '../../../atoms/text/din-condensed';

type Props = TLiveTop

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
  min-height: 160px; /* 最低の高さを決めます */
  max-height: 100%; /* height: 100%だとダメなのでmax-heightにしています */
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.navy};
`;

const Contents = styled.div`
  /* 写真の幅 85px + padding-leftの25px; */
  width: calc(100% - 110px);
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
  word-wrap: break-word;
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
  link: '/live/detail',
  title: 'BUMP OF CHICKEN\nTOUR 2017-2018\nPATHFINDER',
  year: '2019'
};

export default List;
