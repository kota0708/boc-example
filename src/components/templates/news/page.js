// @flow
import React from 'react';
import styled from 'styled-components';
import pageData from '../../../constants/stub/news/page';
import { SIZE_LG } from '../../../constants/styles/size';

import NewsList from '../../molecules/news-list';
import Share from '../../molecules/sns/sns-share';


type Props = {
  pageData?: Object, // ページデータを受け取る
};

const Wrap = styled.div`
  padding-top: 80px;
`;

const NewListWrap = styled.div`
  margin-bottom: 52px;
  padding: 0 25px;
`;

const ContentsWrap = styled.div`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  letter-spacing: 0.0004em;
  padding: 0 25px;
  margin-bottom: 80px;
`;

const ShareWrap = styled.div`
  padding: 0 25px;
`;

const NewsPage = (props: Props) => {
  const { pageData } = props;
  return (
    <Wrap>
      <NewListWrap>
        <NewsList
          date={pageData.date}
          category={pageData.category[0]}
          categoryColor="black"
          description={pageData.title}
          descriptionSize={SIZE_LG}
          link="/news" // ここのurlもいずれ動的なurlになる
        />
      </NewListWrap>
      <ContentsWrap
        dangerouslySetInnerHTML={{
          __html: pageData.body
        }}
      />
      <ShareWrap>
        <Share />
      </ShareWrap>
    </Wrap>
  );
};

NewsPage.defaultProps = {
  pageData
};

export default NewsPage;
