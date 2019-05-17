// @flow
import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { assign } from 'lodash';

type Props = {
  children: React.Node,
  opt?: Object // スライドのオプションを受け取る
};

// スライドのデフォルトのオプション
const defaultOpt = {
  arrows: false,
  // centerMode: true,
  adaptiveHeight: true
};

const Carousel = (props: Props) => {

  const { children, opt } = props;

  // デフォルトのオプションとpropsのオプションをマージ
  // const params = Object.assign(defaultOpt, opt);
  const params = assign(defaultOpt, opt);

  return (
    <Fragment>
      <Slider {...params}>
        {children}
      </Slider>
    </Fragment>
  );
};

Carousel.defaultProps = {
  opt: {
    speed: 500,
    centerMode: true,
    slidesToShow: 1, // 1フレーム時に表示する数
    slidesToScroll: true // スワイプの真偽
  }
};

export default Carousel;
