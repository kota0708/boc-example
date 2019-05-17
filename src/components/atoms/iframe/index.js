/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  src: string, // iframeのsrc
  title: string
};

const Frame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const IFrame = (props: Props) => {
  const { src, title } = props;
  return (
    <Frame
      src={src}
      frameBorder="0"
      title={title}
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};
export default IFrame;
