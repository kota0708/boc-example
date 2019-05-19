import React from 'react';
import styled from 'styled-components';

import Close from '../atoms/icons/close';

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;

const SortList = () => (
  <Wrap width="22" height="22" viewBox="0 0 22 22">
    <Close />
  </Wrap>
);
export default SortList;
