// @flow
import React, { Fragment } from 'react';
import styled from 'styled-components';

import PanelLink from '../molecules/panel-link';

type Props = {
  data?: Array<Object>, // リンクのリストを受け取る
};

const PanelLinkWrap = styled.div`
  margin-bottom: 1px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const PanelLists = (props: Props) => {
  const { data } = props;

  const panels = data.map((r, i) => (
    <PanelLinkWrap key={i}>
      <PanelLink
        text={r.name}
        link={r.link}
      />
    </PanelLinkWrap>
  ));

  return (
    <Fragment>
      {panels}
    </Fragment>
  );
};

PanelLists.defaultProps = {
  // 仮のデータです
  // TODO: 後でJSONかjsで外部化する
  data: [
    {
      name: 'TOWER RECORDS',
      link: '/'
    },
    {
      name: 'HMV',
      link: '/'
    },
    {
      name: 'TSUTAYA',
      link: '/'
    },
    {
      name: 'Amazon',
      link: '/'
    }
  ]
};

export default PanelLists;
