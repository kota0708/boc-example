// @flow
import React from 'react';
import styled from 'styled-components';
import pageData from '../../../constants/stub/news/page';


type Props = {
  pageData?: Array<Object>, // ページデータを受け取る
};

const ContentsWrap = styled.div`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  letter-spacing: 0.0004em;
  padding: 0 25px;
`;

const NewsPage = (props: Props) => {
  const { pageData } = props;
  return (
    <ContentsWrap
      dangerouslySetInnerHTML={{
        __html: pageData.body
      }}
    />
  );
};

NewsPage.defaultProps = {
  pageData
};

export default NewsPage;
