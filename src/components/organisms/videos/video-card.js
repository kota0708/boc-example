/* @flow */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import VideoLabels from '../../molecules/videos/video-labels';
import { TVideoCard } from '../../../flow';
import Carousel from '../../molecules/slide/carousel';
import FitImage from '../../atoms/images/fit-image';
// import Color from '../../../constants/styles/color';

type Props = {
  data: TVideoCard
};

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  width: 100%;
`;

const LabelInner = styled.div`
  position: relative;
  &.hover {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0%;
      margin: auto 0;
      display: block;
      width: 100%;
      height: 100%;
      opacity: 0.22;
      background-image: ${props => props.theme.colors.gradation};
    }
  }
`;

const Inner = styled.div`
  width: 100%;
`;

const VideoCard = (props: Props) => {
  const { data } = props;
  const {
    category,
    title,
    images,
    id
  } = data;
  const urls = images.map(d => `/images/videos/${d}`);
  const image = urls.map(d => <Inner key={d}><FitImage url={d} /></Inner>);
  const [isHover, setHover] = useState(false);
  const className = isHover ? 'hover' : '';
  return (
    <StyledLink
      to={`/videos/detail/?id=${id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div>
        <Carousel
          opt={{ fade: true, autoplay: true, centerMode: false }}
        >
          {image}
        </Carousel>
      </div>
      <LabelInner className={className}>
        <VideoLabels title={title} label={category} />
      </LabelInner>
    </StyledLink>
  );
};
export default VideoCard;
