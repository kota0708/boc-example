/* @flow */
import React from 'react';
import styled from 'styled-components';

import { SIZE_XSM } from '../../../constants/styles/size';
import DinCondensed from '../../atoms/text/din-condensed';
// import Color from '../../../constants/styles/color';

type Props = {
  title: string,
  label: string
};

const Container = styled.dl`
  padding: 15px 0 18px 29px;
`;

const Dt = styled.dt`
  color: ${props => props.theme.colors.gray};
  display: inline;
`;

const Dd = styled.dd`
  display: inline;
  margin-left: 51px;
`;

const Text = styled.span`
  font-size: 14px;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.black};
`;


const VideoLabels = (props: Props) => {
  const { label, title } = props;
  return (
    <Container>
      <Dt>
        <DinCondensed text={label} size={SIZE_XSM} />
      </Dt>
      <Dd>
        <Text>{title}</Text>
      </Dd>
    </Container>
  );
};
export default VideoLabels;
