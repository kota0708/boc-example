/* @flow */
import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby';

// import carouselData from '../../constants/stub/top/carousel';
// import easeOutQuint from '../../constants/styles/easing/ease-out-quint';

// import LogoSymbol from '../atoms/logo/logo-symbol';

// import Sns from '../molecules/sns/sns-top';
import Year from '../molecules/history/yaer';

// import MenuContents from '../organisms/menu-contents';

const Wrap = styled.div`
  padding-top: 80px;
`;

const History = () => (
  <Wrap>
    <Year />
  </Wrap>
);

export default History;
