// @flow
import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { SIZE_MD } from '../../constants/styles/size';
import Color from '../../constants/styles/color';

import DinCondensed from '../atoms/text/din-condensed';
import ArrowLink from '../atoms/arrow/arrow-link';

import NewsList from '../molecules/news-list';

type Props = {
  data?: Array<Object>, // newsのリストのデータを受け取る
};

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const ArrowWrap = styled.div`
  width: 20px;
  height: 20px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${Color.BLACK};
  text-decoration: none;
`;

const MoreText = styled.p`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  letter-spacing: 0.0004em;
  margin-right: 10px;
`;

const News = (props: Props) => {
  const { data } = props;

  const newsLists = data.map((r, i) => (
    <NewsList
      key={i}
      date={r.date}
      category={r.category}
      description={r.description}
    />
  ));

  return (
    <Fragment>
      <Heading>
        <DinCondensed size={SIZE_MD} text="NEWS" />
        <div>
          <StyledLink to="/news">
            <MoreText>
              MORE
            </MoreText>
            <ArrowWrap>
              <ArrowLink />
            </ArrowWrap>
          </StyledLink>
        </div>
      </Heading>
      {newsLists}
    </Fragment>
  );
};

News.defaultProps = {
  data: [
    {
      date: '2019.04.05',
      category: 'MAGAZINE',
      description: '「月虹」がTVアニメ「からくりサーカス」第3クールエンディングテーマに起用'
    },
    {
      date: '2019.04.03',
      category: 'TEST',
      description: '「月虹」がTVアニメ「からくりサーカス」第3クールエンディングテーマに起用'
    }
  ]
};

export default News;
