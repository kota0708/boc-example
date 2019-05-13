/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  url: string // url of image
};

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const FitImage = (props: Props) => (
  <Image src={props.url} alt="" />
);
export default FitImage;
