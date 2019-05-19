import React from 'react';
import styled from 'styled-components';

import SortList from '../molecules/sort-list';
import SortIcon from '../atoms/icons/sort';

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;

const Sort = () => (
  <Wrap width="22" height="22" viewBox="0 0 22 22">
    <SortList />
    <SortIcon />
  </Wrap>
);
export default Sort;
