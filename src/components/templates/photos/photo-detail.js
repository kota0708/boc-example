/* @flow */
import React, { memo } from 'react';
import styled from 'styled-components';

// import Color from '../../../constants/styles/color';
// import Image from '../../atoms/image';
import FitImage from '../../atoms/images/fit-image';
import CloseButton from '../../atoms/buttons/close-button';
import ControlPlay from '../../atoms/icons/control-play';
import PhotoPageIndicators from '../../molecules/photos/detail/photo-page-indicators';

type Props = {
  index: number, // 表示させるURLIndex
  photoData: Object,
  onClose: () => void;
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.navy};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 25px;
  // 余白（25）/デザインwidth(375)
  right: 6.67%;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 100%;
`;

const PageIndicatorContainer = styled.div`
  position: absolute;
  // 余白（25）/デザインheight(580)
  bottom: 3.8%;
  // 余白（23）/デザインwidth(375)
  right: 6.67%;
`;

const ControlContainer = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  // 余白（25）/デザインheight(580)
  bottom: 3.67%;
  left: 25px;
`;

const ControlInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -10px 0 0 -10px;
`;

const PhotoDetail = memo((props: Props) => {
  const {
    photoData,
    index,
    onClose
  } = props;
  const { photos } = photoData;
  const url = `/images/photos/${photos[index].filename}`;
  return (
    <Container>
      <ImageContainer>
        <FitImage url={url} />
      </ImageContainer>
      <PageIndicatorContainer>
        <PhotoPageIndicators current={index + 1} length={photos.length} />
      </PageIndicatorContainer>
      <ControlContainer>
        <ControlInner>
          <ControlPlay />
        </ControlInner>
      </ControlContainer>
      <CloseButtonContainer>
        <CloseButton
          onClick={() => {
            onClose();
          }}
        />
      </CloseButtonContainer>
    </Container>
  );
}, (prevProps, nextProps) => prevProps !== nextProps);

export default PhotoDetail;
