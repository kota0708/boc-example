/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { SIZE_XSM } from '../../../../constants/styles/size';
import Color from '../../../../constants/styles/color';

import DinCondensed from '../../../atoms/text/din-condensed';

type Props = {
  imgUrl?: string, // 画像のurlを受け取る
  type?: string, // discographyの種類を受け取る
  link?: string, // discographyの中ページのurlを受け取る
  title?: string // discographyのタイトルを受け取る
}

const Wrap = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  position: relative;

  :hover {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      margin: auto 0;
      display: block;
      width: 100%;
      height: 100%;
      opacity: 0.22;
      background: ${Color.GRADATION};
      z-index: -1;
    }

    & {
      .hover {
        box-shadow: 15px 15px 30px 0 rgba(0, 0, 0, 0.2);
        background-color: rgba(0, 0, 0, 0.03);
      }
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  padding: 20px 25px;
`;

const ImageWrap = styled.div`
  width: 50%;
`;

const ContentsWrap = styled.div`
  width: calc(50% - 25px);
  margin-left: 25px;
`;

const DinCondensedWrap = styled.h2`
  font-weight: 500;
  font-style: normal;
  margin-bottom: 16px;
  color: ${Color.GRAY};
`;

const Title = styled.p`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  letter-spacing: 0.0004em;
  color: ${Color.BLACK};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const DiscographyList = (props: Props) => {
  const {
    imgUrl,
    type,
    link,
    title
  } = props;

  return (
    <Wrap>
      <Inner>
        <StyledLink to={link}>
          <ImageWrap>
            <Image className="hover" src={imgUrl} />
          </ImageWrap>
          <ContentsWrap>
            <DinCondensedWrap>
              <DinCondensed size={SIZE_XSM} text={type} />
            </DinCondensedWrap>
            <Title>{title}</Title>
          </ContentsWrap>
        </StyledLink>
      </Inner>
    </Wrap>
  );
};

DiscographyList.defaultProps = {
  // 仮のデータです
  // TODO: 後でJSONかjsで外部化する
  imgUrl: '/images/photos/0.jpg',
  type: 'SINGLE',
  link: '/discography/pages',
  title: 'Aurora'
};

export default DiscographyList;
