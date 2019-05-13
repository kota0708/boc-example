// @flow
import styled from 'styled-components';
import React, { Fragment } from 'react';
import Slider from 'react-slick';

import Image from '../../atoms/image';

type Props = {
  urls?: Array<string>, // 画像のurlを受け取る
  speed?: number, // フェードするスピード
  autoplaySpeed?: number // 次のフェードに移行する時間
};

const FadeInner = styled.div`
  width: 100%;
`;

const Fade = (props: Props) => {

  const { urls, speed, autoplaySpeed } = props;

  // フェードのオプション
  const params = {
    autoplay: true,
    arrows: false,
    infinite: true,
    fade: true,
    adaptiveHeight: true,
    centerPadding: '0',
    speed,
    autoplaySpeed
  };

  const fadeData = urls.map((r, i) => (
    <FadeInner
      key={i}
    >
      <Image imgSrc={r} />
    </FadeInner>
  ));

  return (
    <Fragment>
      <Slider {...params}>
        {fadeData}
      </Slider>
    </Fragment>
  );
};

Fade.defaultProps = {
  urls: [
    '/images/photos/1.jpg',
    '/images/photos/2.jpg',
    '/images/photos/3.jpg'
  ],
  speed: 800,
  autoplaySpeed: 3000
};

export default Fade;
