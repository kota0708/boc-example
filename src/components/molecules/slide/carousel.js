// @flow
import React, { Fragment } from 'react';
import Slider from 'react-slick';

type Props = {
  children: React.Node,
  opt?: Object // スライドのオプションを受け取る
};

// スライドのデフォルトのオプション
const defaultOpt = {
  arrows: false,
  centerMode: true,
  adaptiveHeight: true
};

const Carousel = (props: Props) => {

  const { children, opt } = props;

  // デフォルトのオプションとpropsのオプションをマージ
  const param = Object.assign(defaultOpt, opt);

  return (
    <Fragment>
      <Slider {...param}>
        {children}
      </Slider>
    </Fragment>
  );
};

Carousel.defaultProps = {
  opt: {
    speed: 500,
    slidesToShow: 1, // 1フレーム時に表示する数
    slidesToScroll: true // スワイプの真偽
  }
};

export default Carousel;
