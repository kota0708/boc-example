/* @flow */
import React, { Fragment } from 'react';
import styled from 'styled-components';

import VideoCard from '../../organisms/videos/video-card';
import Sort from '../../organisms/sort';

import { TVideoCard } from '../../../flow';

type Props = {
  data: Array<TVideoCard>
};

const Inner = styled.div`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const VideoTopTemplate = (props: Props) => {
  const { data } = props;
  const cards = data.map(d => <Inner key={d.id}><VideoCard data={d} /></Inner>);
  return (
    <Fragment>
      {cards}
      <Sort />
    </Fragment>
  );
};
export default VideoTopTemplate;
