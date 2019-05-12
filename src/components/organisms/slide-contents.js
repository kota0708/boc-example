// @flow
import styled from 'styled-components';
import React, { Fragment } from 'react';
import carouselData from '../../constants/stub/top/carousel';
import Color from '../../constants/styles/color';

import nl2br from '../../util/nl2br';
import Carousel from '../molecules/slide/carousel';

import Image from '../atoms/image';

type Props = {
  data?: Array<Object> // トピックスのデータを受け取る
};

const SlideInner = styled.div`
  padding: 0 5px;
`;

const ImageWrap = styled.div`
  margin-bottom: 12px;
`;

const ContentWrap = styled.div`
  width: 100%;
  font-size: 1.4rem;
  font-size: 14px;
  line-height: 1.71;
  font-weight: normal;
  letter-spacing: 0.0004em;
`;

const Category = styled.h2`
  color: ${Color.GRAY};
  margin-bottom: 7px;
`;

const Description = styled.p`
  color: ${Color.Black};
`;

// // スライドのオプション
// const params = {
//   arrows: false,
//   infinite: true,
//   centerMode: true,
//   adaptiveHeight: true,
//   className: 'center',
//   speed: 500,
//   slidesToShow: 1, // 1フレーム時に表示する数
//   slidesToScroll: true // スワイプの真偽
// };

const SlideContents = (props: Props) => {

  const { data } = props;

  const carouselData = data.map((r, i) => (
    <SlideInner
      key={i}
    >
      <ImageWrap>
        <Image imgSrc={r.url} />
      </ImageWrap>
      <ContentWrap>
        <Category>{nl2br(r.title)}</Category>
        <Description>{nl2br(r.description)}</Description>
      </ContentWrap>
    </SlideInner>
  ));

  return (
    <Fragment>
      <Carousel>
        {carouselData}
      </Carousel>
    </Fragment>
  );
};

SlideContents.defaultProps = {
  data: carouselData.data
};

export default SlideContents;
