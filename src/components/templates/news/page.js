// @flow
import React from 'react';
import styled from 'styled-components';
import { SIZE_LG } from '../../../constants/styles/size';

import NewsList from '../../molecules/news-list';
import Share from '../../molecules/sns/sns-share';
import type { TNewsDetail } from '../../../flow';


type Props = {
  pageData: TNewsDetail, // ページデータを受け取る
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

export default NewsPage;
