/* @flow */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import photoArtists from '../../constants/stub/top/photo-artists';
import carouselData from '../../constants/stub/top/carousel';
// import newsData from '../../constants/stub/top/news';

import LogoName from '../atoms/logo/logo-name';

import Sns from '../molecules/sns/sns-top';
import Fade from '../molecules/slide/fade';
import NewsHeading from '../molecules/news-heading';
import GlobalSlide from '../organisms/slide/global-slide';

import News from '../organisms/news';

type Props = {
  artists?: Array<string>, // フェードさせる写真のurlを受け取る
  carouselData?: Array<Object>, // カルーセルのデータを受け取る
  newsData: Array<TNewsList> // newsデータを受け取る
};

const Heading = styled.div`
  padding: 0 25px;
  margin-bottom: 20px;
`;

const HeadingText = styled.p`
  font-size: 10px;
  font-size: 1rem;
  line-height: 1.6;
  letter-spacing: 0.0004px;
`;

const LogoNameWrap = styled.div`
  margin-bottom: 4px;
`;

const ContentsWrap = styled.div`
  margin-bottom: 80px;
`;

const NewsHeadingWrap = styled.div`
  margin-bottom: 32px;
`;

const Top = (props: Props) => {

  const { artists, carouselData, newsData } = props;

  return (
    <Fragment>
      <Heading>
        <LogoNameWrap>
          <LogoName />
        </LogoNameWrap>
        <HeadingText>
          OFFICIAL WEBSITE
        </HeadingText>
      </Heading>
      <ContentsWrap>
        <Fade
          urls={artists} // フェードさせる写真のurlの配列を渡す
          speed={800} // スライドのスピードを渡す
          autoplaySpeed={3000} // 次のスライドに行く時間を渡す
        />
      </ContentsWrap>
      <ContentsWrap>
        <GlobalSlide
          data={carouselData} // カルーセルのデータの配列を受け取る
        />
      </ContentsWrap>
      <ContentsWrap>
        <NewsHeadingWrap>
          <NewsHeading />
        </NewsHeadingWrap>
        <News
          data={newsData} // newsのデータの配列を受け取る
        />
      </ContentsWrap>
      <Sns />
    </Fragment>
  );
};

Top.defaultProps = {
  artists: photoArtists.photos,
  carouselData: carouselData.date
};

export default Top;
