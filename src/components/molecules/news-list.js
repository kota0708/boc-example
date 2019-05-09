// @flow
import React from 'react';
import styled from 'styled-components';
import Color from '../../constants/styles/color';

type Props = {
  date?: string, // 日付を受け取る
  category?: string, // カテゴリーを受け取る
  description?: string, // 詳細を受け取る
  categoryColor?: string, // カテゴリーの色を受け取る
  descriptionSize?: string // 詳細のフォントサイズを受け取る
};

const Content = styled.div`
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.71;
  letter-spacing: 0.0004em;
  margin-bottom: 30px;

  :last-child {
    margin-bottom: 0;
  }
`;

const HeadingWrap = styled.div`
  width: 100%;
  margin-bottom: 9px;
  position: relative;

  ::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${Color.GRAY};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto 0;
    z-index: -1;
  }
`;

const HeadingInner = styled.div`
  display: inline-flex;
  color: ${Color.GRAY};
  background-color: ${Color.WHITE};
  padding-right: 19px;
  flex-wrap: wrap;
`;

const HeadingDate = styled.p`
  margin-right: 11px;
`;

const HeadingCategory = styled.p`
  &.gray {
    color: ${Color.GRAY};
  }

  &.black {
    color: ${Color.BLACK};
  }
`;

const Description = styled.h2`
  font-weight: normal;

  &.small {
    font-size: 14px;
    font-size: 1.4rem;
  }

  &.large {
    font-size: 20px;
    font-size: 2rem;
    line-height: 1.6;
  }
`;

const NewsList = (props: Props) => {
  const {
    date,
    category,
    description,
    categoryColor,
    descriptionSize
  } = props;
  return (
    <Content>
      <HeadingWrap>
        <HeadingInner>
          <HeadingDate>{date}</HeadingDate>
          <HeadingCategory className={categoryColor}>{category}</HeadingCategory>
        </HeadingInner>
      </HeadingWrap>
      <Description className={descriptionSize}>{description}</Description>
    </Content>
  );
};

NewsList.defaultProps = {
  date: '2019.04.05',
  category: 'MAGAZINE',
  description: '「月虹」がTVアニメ「からくりサーカス」第3クールエンディングテーマに起用',
  categoryColor: 'gray',
  descriptionSize: 'small'
};

export default NewsList;
