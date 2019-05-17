/* @flow */
import React from 'react';
import styled from 'styled-components';

// import Color from '../../../constants/styles/color';

type Props = {
  onClick: () => void
};

const Button = styled.button`
  width: 40px;
  height: 40px;
  position: relative;
  box-sizing: border-box;
  line-height: 40px;
  outline: none;
  
  &:after,
  &:before {
    content: '';
    width: 28px;
    height: 2px;
    transform: rotate(-45deg);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -1px;
    margin-left: -14px;
    display: block;
    background-color: ${props => props.theme.colors.white};
  }
  
  &:after {
    transform: rotate(45deg);
  }
`;

const CloseButton = (props: Props) => (
  <Button onClick={(event) => {
    event.preventDefault();
    props.onClick();
  }}
  />
);

export default CloseButton;
