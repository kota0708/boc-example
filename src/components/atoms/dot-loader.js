import React from 'react';
import styled, { keyframes } from 'styled-components';
import Color from '../../constants/styles/color';

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DotScall = keyframes`
  0% { transform: scale(0); }
  50% { transform: scale(1); }
  100% { transform: scale(0); }
`;

const Loader = styled.span`
  width: 4px;
  height: 4px;
  background-color: ${Color.WHITE};
  transform: scale(0);
  animation: ${DotScall} 2s infinite ease-in-out;
  :nth-child(1) {
    margin-right: 4px;
  }

  :nth-child(2) {
    margin-right: 4px;
    animation-delay: 0.3s;
  }

  :nth-child(3) {
    animation-delay: 0.6s;
  }
`;


const DotLoader = () => (
  <Wrap>
    <Inner>
      <Loader />
      <Loader />
      <Loader />
    </Inner>
  </Wrap>
);

export default DotLoader;
