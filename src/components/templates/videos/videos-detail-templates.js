/* @flow */
import React from 'react';
import styled from 'styled-components';

import GlobalSlide from '../../organisms/slide/global-slide';
import Share from '../../molecules/sns/sns-share';
import IFrame from '../../atoms/iframe';
import DinCondensed from '../../atoms/text/din-condensed';
import { SIZE_SM, SIZE_XSM } from '../../../constants/styles/size';
// import Color from '../../../constants/styles/color';


const Container = styled.div`
  padding-top: 80px;
`;

const Inner = styled.div`
  max-width: 86.4%;
  margin: 0 auto;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  padding-top: 56.25%;
`;

const CategoryContainer = styled.div`
  color: ${props => props.theme.colors.gray};
  margin-top: 36px;  
`;

const Title = styled.h2`
  margin-top: 41px;
  font-size: 24px;
  font-size: 2.4rem;
`;

const SliderContainer = styled.div`
  margin-top: 80px;
`;

const ShareContainer = styled.div`
  width: 100%;
  margin-top: 58px;
`;

const RelatedContainer = styled.h3`
  margin-bottom: 39px;
  margin-left: 25px;
  
`;

const BodyContainer = styled.div`
  margin-top: 81px;
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.7;
  // htmlのtagがそのままはいってくる想定なのでタグ指定。  
  p {
    margin-bottom: 34px;
    &:last-child {
      margin-bottom: 0;
    }
  }
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
  carouselData: Object,
  data: IVideoDetail
};

const VideosDetailTemplates = (props: Props) => {
  const { carouselData, data } = props;
  const {
    title,
    body,
    id,
    category
  } = data;
  const yURL = `https://www.youtube.com/embed/${id}`;
  return (
    <Container>
      <VideoContainer>
        <IFrame src={yURL} title={title} />
      </VideoContainer>
      <Inner>
        <CategoryContainer>
          <DinCondensed text={category} size={SIZE_XSM} />
        </CategoryContainer>
        <Title>{title}</Title>
        <BodyContainer
          dangerouslySetInnerHTML={{
            __html: body
          }}
        />
        <ShareContainer>
          <Share />
        </ShareContainer>
      </Inner>
      <SliderContainer>
        <RelatedContainer>
          <DinCondensed text="RELATED CONTENT" size={SIZE_SM} />
        </RelatedContainer>
        <GlobalSlide data={carouselData} />
      </SliderContainer>
    </Container>
  );
};
export default VideosDetailTemplates;
