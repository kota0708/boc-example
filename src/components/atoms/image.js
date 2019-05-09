// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  imgSrc: string // 画像のsrcをうけとる
};

const Img = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

const Image = (props: Props) => {
  const { imgSrc } = props;

  const sectionStyle = {
    backgroundImage: `url(${imgSrc})`
  };

  return <Img style={sectionStyle} />;
};

export default Image;
