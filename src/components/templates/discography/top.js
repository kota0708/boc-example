// @flow
import React from 'react';
import styled from 'styled-components';
// import pageData from '../../../constants/stub/news/page';
// import { SIZE_LG } from '../../../constants/styles/size';

import Lists from '../../organisms/discography/top/lists';
import Sort from '../../organisms/sort';
// import Share from '../../molecules/sns/sns-share';


type Props = {
  data?: Array<Object>, // discographyのリストデータを受け取る
};

const Wrap = styled.div`
  padding-top: 80px;
`;

const Top = (props: Props) => {
  const { data } = props;

  return (
    <Wrap>
      <Sort />
      <Lists data={data} />
    </Wrap>
  );
};

Top.defaultProps = {
  // 仮のデータです
  // TODO: 後でJSONかjsで外部化する
  data: [
    {
      imgUrl: '/images/photos/0.jpg',
      type: 'SINGLE',
      link: '/discography/pages',
      title: 'Aurora'
    },
    {
      imgUrl: '/images/photos/1.jpg',
      type: 'SINGLE',
      link: '/discography/pages',
      title: '話がしたいよ / シリウス / Spica'
    },
    {
      imgUrl: '/images/photos/2.jpg',
      type: 'SINGLE',
      link: '/discography/pages',
      title: 'シリウス'
    },
    {
      imgUrl: '/images/photos/3.jpg',
      type: 'DVD/Blu-ray',
      link: '/discography/pages',
      title: 'BUMP OF CHICKEN TOUR 2017-2018 PATHFINDER SAITAMA SUPER ARENA'
    }
  ]
};

export default Top;
