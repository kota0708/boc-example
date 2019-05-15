// @flow
import React, { Fragment } from 'react';
// import styled from 'styled-components';

import List from '../../../molecules/discography/top/list';

type Props = {
  data: Array<Object>, // discographyのリストデータを受け取る
};

const Lists = (props: Props) => {
  const { data } = props;

  const list = data.map((r, i) => (
    <List
      imgUrl={r.imgUrl}
      type={r.type}
      link={r.link}
      title={r.title}
      key={i}
    />
  ));

  return (
    <Fragment>
      {list}
    </Fragment>
  );
};

export default Lists;
