// @flow
import React, { Fragment } from 'react';
import Slider from 'react-slick';

type Props = {
  children: React.Node,
};

// スライドのオプション
const params = {
  arrows: false,
  infinite: true,
  centerMode: true,
  adaptiveHeight: true,
  className: 'center',
  speed: 500,
  slidesToShow: 1, // 1フレーム時に表示する数
  slidesToScroll: true // スワイプの真偽
};

const Carousel = (props: Props) => {

  const { children } = props;

  return (
    <Fragment>
      <Slider {...params}>
        {children}
      </Slider>
    </Fragment>
  );
};

// Carousel.defaultProps = {
//   data: [
//     {
//       url: '/images/photos/1.jpg',
//       title: 'GOODS',
//       description: 'BUMP OF CHICKEN\n2018 Winter Collection'
//     },
//     {
//       url: '/images/photos/2.jpg',
//       title: 'TOUR',
//       description: 'BUMP OF CHICKEN\nTOUR 2019'
//     },
//     {
//       url: '/images/photos/3.jpg',
//       title: 'TOUR',
//       description: 'OUR 2019\nAURORA'
//     }
//   ]
// };

export default Carousel;
