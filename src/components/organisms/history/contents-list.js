/* @flow */
import React, { Fragment } from 'react';
// import styled from 'styled-components';

import Contents from '../../molecules/history/contents';

type Props = {
  data?: Array<Object> // historyのデータを受け取る
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

ContentsList.defaultProps = {
  // 仮のデータです
  // TODO: 後でJSONかjsで外部化する
  data: [
    {
      date: '9/16',
      description: '全国アリーナツアー「BUMP OF CHICKEN TOUR 2017-2018 PATHFINDER」スタート'
    },
    {
      date: '7/5',
      description: 'Digital Single「記念撮影」リリース (トイズファクトリー)'
    },
    {
      date: '5/1',
      description: 'Digital Single「リボン」リリース (トイズファクトリー)'
    },
    {
      date: '2/10',
      description: '新曲「リボン」スタジオライブ生配信'
    }
  ]
};

export default ContentsList;
