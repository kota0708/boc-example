/* @flow */
import React from 'react';
import styled from 'styled-components';

// import Color from '../../constants/styles/color';

const Container = styled.div`
  width: 40px;
`;

type Props = {
  current: number,
  length: number
};


const Span = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.white};
  margin: 10px 0;
`;
const P = styled.p`
  font-family: 'URWDINCond';
  font-size: 1.6rem;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  letter-spacing: normal;
  text-align: center;  
`;


const PhotoPageIndicators = (props: Props) => (
  <Container>
    <P>{props.current}</P>
    <Span />
    <P>{props.length}</P>
  </Container>
);
export default PhotoPageIndicators;
