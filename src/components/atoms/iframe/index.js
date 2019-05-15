/* @flow */
import React from 'react';

type Props = {
  src: string, // iframeのsrc
  title: string
};

const IFrame = (props: Props) => {
  const { src, title } = props;
  return (
    <iframe
      src={src}
      frameBorder="0"
      title={title}
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};
export default IFrame;
