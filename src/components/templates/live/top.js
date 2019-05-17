/* @flow */
import React from 'react';
import styled from 'styled-components';

import List from '../../molecules/live/top/list';

type Props = {
  test?: string
};

const Wrap = styled.div`
  padding-top: 80px;
`;

const Top = (props: Props) => {

  const {
    test
  } = props;

  console.log(test);

  return (
    <Wrap>
      <List />
    </Wrap>
  );
};

Top.defaultProps = {
  test: 'test'
};

export default Top;
