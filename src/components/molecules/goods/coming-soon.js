import React from 'react';
import styled from 'styled-components';

import DinCondensed from '../../atoms/text/din-condensed';
import { SIZE_XSM } from '../../../constants/styles/size';

const Container = styled.div`
  background-color: ${props => props.theme.colors.black};
  width: 100px;
  height: 30px;
`;

const Text = styled.p`
  font-weight: bold;
  color: ${props => props.theme.colors.white};
  padding: 8px 10px;
  box-sizing: border-box;
`;

const ComingSoon = () => (
  <Container>
    <Text>
      <DinCondensed text="COMING SOON!" size={SIZE_XSM} />
    </Text>
  </Container>
);
export default ComingSoon;
