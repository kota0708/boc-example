/* @flow */
import React from 'react';
import styled from 'styled-components';

import { TLiveTop } from '../../../flow';

import Lists from '../../organisms/live/lists';

type Props = {
  data?: Array<TLiveTop>
};

const Wrap = styled.div`
  padding-top: 80px;
`;

const Top = (props: Props) => {

  const {
    data
  } = props;

  return (
    <Wrap>
      <Lists
        data={data}
      />
    </Wrap>
  );
};

Top.defaultProps = {
  // 仮のデータです
  // TODO: 後でJSONかjsで外部化する
  data: [
    {
      imgUrl: '/images/photos/0.jpg',
      link: '/live/detail',
      title: 'BUMP OF CHICKEN\nTOUR 2017-2018\nPATHFINDER',
      year: '2019'
    },
    {
      imgUrl: '/images/photos/1.jpg',
      link: '/live/detail',
      title: 'BUMP OF CHICKEN\nTOUR 2017-2018\nPATHFINDER',
      year: '2018'
    },
    {
      imgUrl: '/images/photos/2.jpg',
      link: '/live/detail',
      title: 'BUMP OF CHICKEN\nTOUR 2017-2018\nPATHFINDER',
      year: '2017'
    },
    {
      imgUrl: '/images/photos/6.jpg',
      link: '/live/detail',
      title: 'BUMP OF CHICKEN\nTOUR 2017-2018\nPATHFINDER',
      year: '2016'
    },
    {
      imgUrl: '',
      link: '/live/detail',
      title: 'BUMP OF CHICKEN\nTOUR 2017-2018\nPATHFINDER',
      year: '2016'
    }
  ]
};

export default Top;
