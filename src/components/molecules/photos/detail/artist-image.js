// @flow
import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Image from '../../../atoms/image';
import easeOutSine from '../../../../constants/styles/easing/ease-out-sine';

type Props = {
  imgSrc: string, // 画像のsrcをうけとる
  albumId: string, // アルバムのID
  picId: string, // 写真のID
  onClick: () => void
};

const ImageWrap = styled.button`
  width: 33.333%;
  overflow: hidden;
  opacity: 1;
  transition-property: opacity;
  transition-duration: 0.3s;
  transition-timing-function: ${easeOutSine};
  outline: none;
  &:hover {
    opacity: 0.8
  }
`;

const ArtistImage = (props: Props) => {
  const {
    imgSrc,
    albumId,
    picId,
    onClick
  } = props;
  const height = typeof window !== 'undefined' ? Math.floor(window.innerWidth / 3) : 125;
  return (
    <ImageWrap onClick={event => {
      event.preventDefault();
      onClick(picId, albumId);
    }}
    >
      <TransitionGroup>
        <LazyLoad
          once
          throttle={200}
          // よしなに変更して。
          offset={100}
          height={height}
        >
          <CSSTransition
            appear
            in
            timeout={600}
            classNames="fade"
          >
            <Image imgSrc={imgSrc} />
          </CSSTransition>
        </LazyLoad>
      </TransitionGroup>
    </ImageWrap>
  );
};

export default ArtistImage;
