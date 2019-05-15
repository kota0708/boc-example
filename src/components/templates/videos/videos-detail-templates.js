/* @flow */
import React from 'react';
import styled from 'styled-components';

import GlobalSlide from '../../organisms/slide/global-slide';
import Share from '../../molecules/sns/sns-share';
import IFrame from '../../atoms/iframe';
import DinCondensed from '../../atoms/text/din-condensed';
import { SIZE_SM } from '../../../constants/styles/size';

// todo: ここよしなに変更を。

const VideoContainer = styled.div`
  width: 100%;
  
  /*height: 0;
  position: relative;
  padding-top: 56.25%;*/
`;

const SliderContainer = styled.div`
  margin-top: 80px;
`;

const ShareContainer = styled.div`
  margin-top: 58px;
`;

const RelatedContainer = styled.h3`
  margin-bottom: 39px;
  margin-left: 25px;
  
`;

// jsonのデータ
type IVideoDetail = {
  category: string,
  title: string,
  id: string,
  body: string
};

// props
type Props = {
  caouselData: Object,
  // src: string, // iframe用
  // title: string,
  data: IVideoDetail
};

const VideosDetailTemplates = (props: Props) => {
  const { caouselData, data } = props;
  const {
    title,
    body,
    id,
    category
  } = data;
  const yURL = `https://www.youtube.com/embed/${id}`;
  return (
    <div>
      <VideoContainer>
        <IFrame src={yURL} title={title} />
      </VideoContainer>
      <p>{category}</p>
      <h2>{title}</h2>
      <div>
        {body}
      </div>
      <ShareContainer>
        <Share />
      </ShareContainer>
      <SliderContainer>
        <RelatedContainer>
          <DinCondensed text="RELATED CONTENT" size={SIZE_SM} />
        </RelatedContainer>
        <GlobalSlide data={caouselData} />
      </SliderContainer>
    </div>
  );
};
export default VideosDetailTemplates;
