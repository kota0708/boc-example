// @flow
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Color from '../../constants/styles/color';

import newsData from '../../constants/stub/top/news';

import NewsList from '../molecules/news-list';

type Props = {
  data?: Array<Object>, // newsのリストのデータを受け取る
};

const StyledLink = styled(Link)`
  display: block;
  padding: 36px 25px;
  text-decoration: none;
  position: relative;

  :hover {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      margin: auto 0;
      display: block;
      width: 100%;
      height: 100%;
      opacity: 0.22;
      background: ${Color.GRADATION};
      z-index: -1;
    }
  }
`;

const News = (props: Props) => {
  const { data } = props;

  const newsLists = data.map((r, i) => (
    <StyledLink key={i} to={r.link}>
      <NewsList
        date={r.date}
        category={r.category}
        description={r.description}
      />
    </StyledLink>
  ));

  return (
    <div>
      {newsLists}
    </div>
  );
};

News.defaultProps = {
  data: newsData.data
};

export default News;
