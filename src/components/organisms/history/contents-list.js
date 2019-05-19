/* @flow */
import React, { Fragment } from 'react';

import Contents from '../../molecules/history/contents';
import type { THistory } from '../../../flow';

type Props = {
  data: Array<THistory> // historyのデータを受け取る
}

const ContentsList = (props: Props) => {
  const {
    data
  } = props;

  const contents = data.map((r, i) => {
    // 偶数と奇数で背景の色を変える
    const color = ((i + 1) % 2 === 0) ? 'navy' : 'black';

    return (
      <Contents
        key={i}
        date={r.date}
        description={r.description}
        color={color}
      />
    );
  });

  return (
    <Fragment>
      { contents }
    </Fragment>
  );
};

export default ContentsList;
