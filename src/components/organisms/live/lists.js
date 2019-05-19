/* @flow */
import React, { Fragment } from 'react';
import List from '../../molecules/live/top/list';

import { TLiveTop } from '../../../flow';

type Props = {
  data?: Array<TLiveTop>
}

const Lists = (props: Props) => {
  const {
    data
  } = props;

  const contents = data.map((r, i) => (
    <List
      imgUrl={r.imgUrl}
      link={r.link}
      title={r.title}
      year={r.year}
      key={i}
    />
  ));

  return (
    <Fragment>
      {contents}
    </Fragment>
  );
};

Lists.defaultProps = {
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
    }
  ]
};

export default Lists;
